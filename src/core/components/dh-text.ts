import { DhContext } from "../models/dh-context";
import { validateDhContextInitialization } from "../utils/validation";
import { DhBaseTextColorableComponent } from "./dh-base-text-colorable-component";

export class DhText extends DhBaseTextColorableComponent {
  private text: string;

  constructor() {
    validateDhContextInitialization();
    super(DhContext.getContext());
    this.text = "";
  }

  public override init(options: { text: string }): void {
    this.text = options.text;
  }

  public override draw(): void {
    this.context.font = "30px Comic Sans MS";
    this.context.textAlign = "center";
    this.context.fillStyle = this.textColor;
    this.context.shadowColor = "#888";
    this.context.shadowBlur = 2;
    this.context.shadowOffsetX = 2;
    this.context.shadowOffsetY = 2;

    this.context.fillText(this.text, this.x, this.y);
  }
}
