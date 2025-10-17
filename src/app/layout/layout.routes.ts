import { Routes } from "@angular/router";
import { Layout } from "./layout";

export const layoutRoutes: Routes = [
 {
  path: "",
  component: Layout,
  children: [
   // { path: "", redirectTo: "dashboard", pathMatch: "full" },
   // { path: "dashboard", loadComponent: () => import("./dashboard/dashboard.component").then((c) => c.DashboardComponent) },
  ]
 }
]