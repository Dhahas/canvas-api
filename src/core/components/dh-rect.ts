import { DhContext } from "../models/dh-context";
import { validateDhContextInitialization } from "../utils/validation";
import { DhBaseColorableComponent } from "./dh-base-colorable-component";

export class DhRect extends DhBaseColorableComponent {
  private width: number;
  private height: number;
  private roundRadius?: number | number[];

  constructor() {
    validateDhContextInitialization();
    super(DhContext.getContext());
    this.width = 0;
    this.height = 0;
  }

  public override init(options: {
    width: number;
    height: number;
    roundRadius?: number | number[];
  }): void {
    this.width = options.width;
    this.height = options.height;
    this.roundRadius = options.roundRadius;
  }

  public override draw(): void {
    this.context.beginPath();

    if (this.roundRadius) {
      this.context.roundRect(
        this.x,
        this.y,
        this.width,
        this.height,
        this.roundRadius
      );
    } else {
      this.context.rect(this.x, this.y, this.width, this.height);
    }

    this.context.fillStyle = this.bgColor;
    this.context.strokeStyle = this.strokeColor;

    this.context.shadowColor = "#A4A4A4";
    this.context.shadowBlur = 5;
    this.context.shadowOffsetX = 3;
    this.context.shadowOffsetY = 3;

    this.context.fill();
    this.context.stroke();

    this.context.closePath();
  }
}
