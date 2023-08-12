import { ReactElement } from "react";

export enum SelectedPage {
  Forside = "forside",
  VoresHonning = "voreshonning",
  // OmBigaarden = "ombigaarden",
  KontaktOs = "kontaktos",
  VoresBigård = "voresbigård",
}

export interface HonningType {
  image: string;
  typeofhoney: string;
  description: ReactElement;
}

export interface BigaardSliderType {
  name?: string;
  description?: string;
  image: string;
}
