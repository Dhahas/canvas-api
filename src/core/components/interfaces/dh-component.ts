export interface DhComponent {
  setPosition(x: number, y: number): void;
  setDepth(depth: number): void;
  getDepth(): number;
  init(options?: { [k: string]: string | string[] | number | number[] }): void;
  draw(): void;
}
