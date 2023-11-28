export class DhContext {
  private static instance: DhContext | null = null;
  private static context: CanvasRenderingContext2D;

  private constructor(ctx?: CanvasRenderingContext2D) {
    if (ctx) DhContext.context = ctx;
  }

  public static getInstance(ctx?: CanvasRenderingContext2D): DhContext {
    if (DhContext.instance === null) {
      DhContext.instance = new DhContext(ctx);
    }

    return DhContext.instance;
  }

  public static getContext(): CanvasRenderingContext2D {
    return DhContext.context;
  }
}
