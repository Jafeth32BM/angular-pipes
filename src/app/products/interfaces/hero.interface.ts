export enum Color {
  blue,
  black,
  red,
  green,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
