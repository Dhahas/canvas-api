import { DhBaseComponent } from "./dh-base-component";
import { DhBgColorable } from "./interfaces/dh-bg-colorable";
import { DhStrokeColorable } from "./interfaces/dh-stroke-colorable";

export class DhBaseColorableComponent
  extends DhBaseComponent
  implements DhBgColorable, DhStrokeColorable
{
  protected bgColor: string;
  protected strokeColor: string;

  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.bgColor = "#000";
    this.strokeColor = "#000";
  }
  setBgColor(bgColor: string): void {
    this.bgColor = bgColor;
  }
  setStrokeColor(strokeColor: string): void {
    this.strokeColor = strokeColor;
  }
}
