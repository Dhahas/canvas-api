import { DhComponent } from "./interfaces/dh-component";

export class DhBaseComponent implements DhComponent {
  protected x: number;
  protected y: number;
  protected depth: number;
  protected readonly context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.x = 0;
    this.y = 0;
    this.depth = -1;
    this.context = context;
  }

  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  setDepth(depth: number): void {
    this.depth = depth;
  }

  getDepth(): number {
    return this.depth;
  }

  init(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _options?:
      | { [k: string]: string | number | number[] | string[] }
      | undefined
  ): void {
    throw new Error("Method not implemented.");
  }

  draw(): void {
    throw new Error("Method not implemented.");
  }
}
