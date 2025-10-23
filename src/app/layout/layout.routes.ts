import { Routes } from "@angular/router";
import { Layout } from "./layout";

export const layoutRoutes: Routes = [
 {
  path: "",
  component: Layout,
  children: [
   { path: "text", loadChildren: () => import("./text-animations/text-animations.routes").then((c) => c.textRoutes) },
   { path: "card", loadComponent: () => import("./card-animations/card-animations").then((c) => c.CardAnimations) },
   { path: "drag", loadComponent: () => import("./drag-animations/drag-animations").then((c) => c.DragAnimations) },
   { path: "image", loadComponent: () => import("./image-animations/image-animations").then((c) => c.ImageAnimations) },
   { path: "video", loadComponent: () => import("./video-animations/video-animations").then((c) => c.VideoAnimations) },
  ]
 }
]