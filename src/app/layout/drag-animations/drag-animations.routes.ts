import { Routes } from "@angular/router";
import { DragAnimations } from "./drag-animations";

export const dragRoutes: Routes = [
 {
  path: "",
  component: DragAnimations,
  children: [
   { path: "drag-box", loadComponent: () => import("./drag-box/drag-box").then((c) => c.DragBox) },
   { path: "drag-fixed", loadComponent: () => import("./drag-fixed/drag-fixed").then((c) => c.DragFixed) },
  ]
 }
]