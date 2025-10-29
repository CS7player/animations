import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 selector: 'app-panel',
 imports: [],
 templateUrl: './panel.html',
})
export class Panel {
 @Input() animationsList: any = [];
 @Output() close = new EventEmitter<boolean>();
 private readonly router = inject(Router)

 naviageTo(item: any) {
  this.router.navigate([`/layout/${item.path || ''}`])
  this.close.emit(false)
 }
}
