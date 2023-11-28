import { DhAbstractComponent, DhRect, DhText } from "../../core/index";
import { DhContext } from "../../core/models/index";
import { validateDhContextInitialization } from "../../core/utils/validation";

export class DhFlowBox extends DhAbstractComponent {
  mainBox: DhRect;
  mainText: DhText;

  private width: number;
  private height: number;
  private text: string;

  constructor() {
    validateDhContextInitialization();
    super(DhContext.getContext());

    this.mainBox = new DhRect();
    this.mainText = new DhText();

    this.width = 0;
    this.height = 0;
    this.text = "";
  }

  public override init(options: {
    width: number;
    height: number;
    text: string;
    bgColor?: string;
    textColor?: string;
  }): void {
    this.width = options.width;
    this.height = options.height;
    this.text = options.text;

    this.mainBox.setPosition(this.x - this.width / 2, this.y - this.height / 2);
    this.mainBox.setBgColor(options.bgColor || "#AAA");
    this.mainBox.setStrokeColor("#FFF");
    this.mainBox.init({
      width: this.width,
      height: this.height,
      roundRadius: 10,
    });

    this.mainText.setPosition(this.x, this.y + 10);
    this.mainText.setTextColor(options.textColor || "#000");
    this.mainText.init({
      text: this.text,
    });
  }

  public override draw(): void {
    this.mainBox.draw();
    this.mainText.draw();
  }
}
