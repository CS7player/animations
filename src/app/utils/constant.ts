import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class Constant {

 static readonly sideBarMenu: any = [
  // { name: "Dashboard", icon: "fa-solid fa-gauge" },
  { name: "Text Animations", icon: "fa-solid fa-font", path: "text" },
  { name: "Card Animations", icon: "fa-solid fa-id-card", path: "card" },
  { name: "Drag Animations", icon: "fa-solid fa-arrows-up-down-left-right", path: "drag" },
  { name: "Image Animations", icon: "fa-solid fa-image", path: "image" },
  { name: "Video Animations", icon: "fa-solid fa-video", path: "video" }
 ];

}
