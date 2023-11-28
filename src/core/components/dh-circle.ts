import { DhContext } from "../models/dh-context";
import { validateDhContextInitialization } from "../utils/validation";
import { DhBaseColorableComponent } from "./dh-base-colorable-component";

export class DhCircle extends DhBaseColorableComponent {
  private r: number;

  constructor() {
    validateDhContextInitialization();
    super(DhContext.getContext());
    this.r = 0;
  }

  public override init(options: { r: number }): void {
    this.r = options.r;
  }

  public override draw(): void {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.context.fillStyle = this.bgColor;
    this.context.strokeStyle = this.strokeColor;
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
  }
}
