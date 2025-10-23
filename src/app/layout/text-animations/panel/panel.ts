import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 selector: 'app-panel',
 imports: [],
 templateUrl: './panel.html',
})
export class Panel {
 private readonly router = inject(Router)
 textAnimationsList: any = [
  { title: "Bounce", path: "bounce" },
  { title: "Swing", path: "swing" },
  { title: "Random", path: "random" },
  { title: "Pop", path: "pop" },
  { title: "Blink", path: "blink" }
 ];

 naviageTo(item: any) {
  this.router.navigate([`/layout/text/${item.path || ''}`])
 }
}
