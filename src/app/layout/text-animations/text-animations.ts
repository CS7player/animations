import { Component } from '@angular/core';
import { Panel } from "../../reusable/panel/panel";
import { RouterOutlet } from '@angular/router';

@Component({
 selector: 'app-text-animations',
 imports: [Panel, RouterOutlet],
 template: `@if(showPanel){
  <app-panel [animationsList]="textAnimationsList" (close)="showPanel = $event"></app-panel>
 }@else {
  <span class="absolute top right-2 bg-green-300 rounded-full px-0.5 hover:bg-red-300">
   <i class="fa-solid fa-xmark text-black" (click)="showPanel = true"></i>
  </span>
  <router-outlet></router-outlet>
 }`
})
export class TextAnimations {
 showPanel: boolean = true;
 textAnimationsList: any = [
  { title: "Bounce", path: "text/bounce" },
  { title: "Swing", path: "text/swing" },
  { title: "Random", path: "text/random" },
  { title: "Pop", path: "text/pop" },
  { title: "Blink", path: "text/blink" }
 ];
}

