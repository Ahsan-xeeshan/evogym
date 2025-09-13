import type { ReactNode } from "react";

export type SelectedPage = "home" | "benefits" | "ourclasses" | "contactus";


export interface BenefitType {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}