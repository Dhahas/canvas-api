import { DhComponent } from "../components/index";
import { DhContext } from "../models/index";

export class DhEngine {
  private componentsMap: Map<string, DhComponent>;
  private isStop: boolean;
  private startedAt: number;
  private stoppedAt: number;
  private lastTimestamp: number;

  constructor(context: CanvasRenderingContext2D) {
    DhContext.getInstance(context);
    this.componentsMap = new Map();
    this.isStop = false;
    this.startedAt = 0;
    this.stoppedAt = 0;
    this.lastTimestamp = 0;
  }

  register(key: string, component: DhComponent): void {
    this.componentsMap.set(key, component);
  }

  registerMap(componentsMap: Map<string, DhComponent>): void {
    componentsMap.forEach((v, k) => this.register(k, v));
  }

  start(): void {
    window.requestAnimationFrame((timestamp) =>
      this.engineFrameStep(timestamp)
    );
  }

  private engineFrameStep(timestamp: number) {
    if (!this.startedAt) {
      this.startedAt = timestamp;
    }

    const elapsed = timestamp - this.startedAt;

    if (this.lastTimestamp !== timestamp) {
      this.orderDepthComponents(this.componentsMap).forEach((v) => v.draw());
      this.isStop = true;
    }

    if (elapsed < 2000) {
      this.lastTimestamp = timestamp;

      if (!this.isStop) {
        window.requestAnimationFrame(this.engineFrameStep);
      } else {
        this.stoppedAt = timestamp;
      }
    }
  }

  private orderDepthComponents(
    componentsMap: Map<string, DhComponent>
  ): DhComponent[] {
    let componentsList: DhComponent[] = [];

    let maxVal = -1;

    // finding existing max depth value
    componentsMap.forEach((v) => (maxVal = Math.max(maxVal, v.getDepth())));

    // updating -1 depth values
    componentsMap.forEach((v) =>
      v.getDepth() < 0 ? v.setDepth(++maxVal) : undefined
    );

    // pushing to list
    componentsMap.forEach((v) => componentsList.push(v));

    // reordering the list
    componentsList = componentsList.sort((a, b) => b.getDepth() - a.getDepth());

    return componentsList;
  }

  public get startedTimestamp(): number {
    return this.startedAt;
  }

  public get stoppedTimestamp(): number {
    return this.stoppedAt;
  }
}
