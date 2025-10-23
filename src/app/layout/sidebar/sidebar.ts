import { Component, inject } from '@angular/core';
import { Constant } from '../../utils/constant';
import { Router } from '@angular/router';

@Component({
 selector: 'app-sidebar',
 imports: [],
 templateUrl: './sidebar.html'
})
export class Sidebar {
 private readonly router = inject(Router)
 sideBarMenu: any = Constant.sideBarMenu

 naviageTo(item: any) {
  this.router.navigate([`/layout/${item.path || ''}`])
 }
}
