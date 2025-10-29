import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Panel } from "../../reusable/panel/panel";

@Component({
 selector: 'app-drag-animations',
 imports: [RouterOutlet, Panel],
 template: `@if(showPanel){
  <app-panel [animationsList]="textAnimationsList" (close)="showPanel = $event"></app-panel>
 }@else {
  <span class="absolute z-50 top right-2 bg-green-300 rounded-full px-0.5 hover:bg-red-300">
   <i class="fa-solid fa-xmark text-black" (click)="showPanel = true"></i>
  </span>
  <router-outlet></router-outlet>
 }`
})
export class DragAnimations {
 showPanel: boolean = true;
 textAnimationsList: any = [
  { title: "Drag-Box", path: "drag/drag-box" },
  { title: "Drag-fixed", path: "drag/drag-fixed" },
  { title: "Drag and Drop", path: "drag/drag-and-drop" },
 ];
}
