import { Routes } from "@angular/router";
import { TextAnimations } from "./text-animations";

export const textRoutes: Routes = [
 {
  path: "",
  component: TextAnimations,
  children: [
   { path: "", redirectTo: "panel", pathMatch: "full" },
   { path: "panel", loadComponent: () => import("./panel/panel").then((c) => c.Panel) },
   { path: "bounce", loadComponent: () => import("./text-bounce/text-bounce").then((c) => c.TextBounce) },
   { path: "swing", loadComponent: () => import("./text-swing/text-swing").then((c) => c.TextSwing) },
   { path: "random", loadComponent: () => import("./text-random/text-random").then((c) => c.TextRandom) },
   { path: "pop", loadComponent: () => import("./text-pop/text-pop").then((c) => c.TextPop) },
   { path: "blink", loadComponent: () => import("./text-blink/text-blink").then((c) => c.TextBlink) },
  ]
 }
]