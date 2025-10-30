import { Routes } from "@angular/router";
import { Layout } from "./layout";

export const layoutRoutes: Routes = [
 {
  path: "",
  component: Layout,
  children: [
   { path: "text", loadChildren: () => import("./text-animations/text-animations.routes").then((c) => c.textRoutes) },
   { path: "card", loadComponent: () => import("./card-animations/card-animations").then((c) => c.CardAnimations) },
   { path: "keyboard", loadComponent: () => import("./keyboard-animations/keyboard-animations").then((c) => c.KeyboardAnimations) },
   { path: "drag", loadChildren: () => import("./drag-animations/drag-animations.routes").then((c) => c.dragRoutes) },
   { path: "image", loadComponent: () => import("./image-animations/image-animations").then((c) => c.ImageAnimations) },
   { path: "video", loadComponent: () => import("./video-animations/video-animations").then((c) => c.VideoAnimations) },
  ]
 }
]