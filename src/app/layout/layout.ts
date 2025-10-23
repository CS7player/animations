import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { slideLeftInOut } from '../utils/animate';
import { RouterOutlet } from '@angular/router';

@Component({
 selector: 'app-layout',
 imports: [Header, Sidebar, RouterOutlet],
 templateUrl: './layout.html',
 animations: [slideLeftInOut]
})
export class Layout {

 showSideBar: boolean = true

 toggleSideBar() {
  setTimeout(() => { this.showSideBar = !this.showSideBar }, 200)
 }

}
