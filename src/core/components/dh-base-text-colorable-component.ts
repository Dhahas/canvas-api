import { DhBaseComponent } from "./dh-base-component";
import { DhTextColorable } from "./interfaces/dh-text-colorable";

export class DhBaseTextColorableComponent
  extends DhBaseComponent
  implements DhTextColorable
{
  protected textColor: string;

  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.textColor = "#000";
  }
  setTextColor(textColor: string): void {
    this.textColor = textColor;
  }
}
