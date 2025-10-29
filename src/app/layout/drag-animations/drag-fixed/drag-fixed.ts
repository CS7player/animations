import { Component, ElementRef, ViewChild } from '@angular/core';
import { Textfield } from "../../../reusable/textfield/textfield";

@Component({
 selector: 'app-drag-fixed',
 imports: [Textfield],
 templateUrl: './drag-fixed.html',
})
export class DragFixed {
 box_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

 @ViewChild('grid', { static: false }) gridRef!: ElementRef;
 isDragging = false;
 offsetX = 0;
 offsetY = 0;
 boxEl!: HTMLElement;
 parentEl!: HTMLElement;
 hoverIndex: number | null = null;
 blockList = "2, 3, 7, 11";
 gridBoxExpression = new RegExp('^$|^(1[0-5]|[0-9])(,(1[0-5]|[0-9]))*$');

 startDrag(event: MouseEvent) {
  this.boxEl = event.target as HTMLElement;
  this.parentEl = this.gridRef.nativeElement as HTMLElement;
  this.isDragging = true;
  this.offsetX = event.clientX - this.boxEl.offsetLeft;
  this.offsetY = event.clientY - this.boxEl.offsetTop;
  this.boxEl.style.transition = 'none';
 }

 onDrag(event: MouseEvent) {
  if (!this.isDragging) return;
  const parentRect = this.parentEl.getBoundingClientRect();
  const boxes = Array.from(this.parentEl.querySelectorAll('.drag-grid-box')) as HTMLElement[];
  const boxRect = this.boxEl.getBoundingClientRect();
  let newX = event.clientX - this.offsetX;
  let newY = event.clientY - this.offsetY;
  // Boundaries
  const maxX = parentRect.width - boxRect.width;
  const maxY = parentRect.height - boxRect.height;
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));
  // Detect hovered cell
  const centerX = event.clientX;
  const centerY = event.clientY;
  this.hoverIndex = null;
  boxes.forEach((cell, i) => {
   const rect = cell.getBoundingClientRect();
   if (centerX >= rect.left && centerX <= rect.right && centerY >= rect.top && centerY <= rect.bottom) {
    this.hoverIndex = i;
   }
  });
  if (this.hoverIndex !== null && this.isBlock(this.hoverIndex)) {
   this.boxEl.style.cursor = "not-allowed";
   return;
  }
  this.boxEl.style.cursor = "grab";
  this.boxEl.style.left = `${newX}px`;
  this.boxEl.style.top = `${newY}px`;
 }

 stopDrag() {
  if (!this.isDragging) return;
  this.isDragging = false;
  if (this.hoverIndex !== null && this.isBlock(this.hoverIndex)) {
   this.hoverIndex = null;
   return;
  }
  this.boxEl.style.transition = 'transform 0.1s ease';
  this.hoverIndex = null;
 }

 isBlock(index: number) {
  if (!this.blockList.trim()) return false;
  const allowedNumbers = this.blockList.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
  return allowedNumbers.includes(index);
 }

}
