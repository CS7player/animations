import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
 selector: 'app-drag-box',
 imports: [],
 templateUrl: './drag-box.html',
})

export class DragBox {
 
 @ViewChild('box', { static: false }) boxRef!: ElementRef;
 isDragging = false;
 offsetX = 0;
 offsetY = 0;
 boxEl!: HTMLElement;
 parentEl!: HTMLElement;

 startDrag(event: MouseEvent) {
  this.boxEl = event.target as HTMLElement;
  this.parentEl = this.boxEl.parentElement as HTMLElement;
  this.isDragging = true;
  this.offsetX = event.clientX - this.boxEl.offsetLeft;
  this.offsetY = event.clientY - this.boxEl.offsetTop;
  this.boxEl.style.transition = 'none';
 }

 onDrag(event: MouseEvent) {
  if (!this.isDragging) return;
  const parentRect = this.parentEl.getBoundingClientRect();
  const boxRect = this.boxEl.getBoundingClientRect();
  // Calculate the new position
  let newX = event.clientX - this.offsetX;
  let newY = event.clientY - this.offsetY;
  // Restrict movement inside parent boundaries
  const maxX = parentRect.width - boxRect.width;
  const maxY = parentRect.height - boxRect.height;
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));
  this.boxEl.style.left = `${newX}px`;
  this.boxEl.style.top = `${newY}px`;
 }

 stopDrag() {
  if (!this.isDragging) return;
  this.isDragging = false;
  this.boxEl.style.transition = 'transform 0.1s ease';
 }
}
