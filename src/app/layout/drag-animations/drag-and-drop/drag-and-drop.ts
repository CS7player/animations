import { Component } from '@angular/core';
import { DialogBox } from "../../../reusable/dialog-box/dialog-box";

@Component({
 selector: 'app-drag-and-drop',
 imports: [DialogBox],
 templateUrl: './drag-and-drop.html',
 styles: ``
})
export class DragAndDrop {

 numberList = [1, 2, 3, 4, 7, 8, 9, 10, 11, 12];
 evenList = [6];
 oddList = [5];
 showError: boolean = false;
 draggedItem: number | null = null;

 contentObj = {}
 evenDialog = { type: 2, contentText: "Select number is not Even Number!!!" }
 oddDialog = { type: 2, contentText: "Select number is not Odd Number!!!" }

 onDragStart(item: number) {
  this.draggedItem = item;
 }

 onDrop(targetList: any) {
  if (this.draggedItem === null) return;

  if (targetList == "even" && this.draggedItem % 2 != 0) {
   this.contentObj = this.evenDialog;
   this.showError = true;
   return
  }
  if (targetList == "odd" && this.draggedItem % 2 == 0) {
   this.contentObj = this.oddDialog;
   this.showError = true;
   return
  }

  if (this.numberList.includes(this.draggedItem)) {
   this.numberList = this.numberList.filter(i => i !== this.draggedItem);
  } else if (this.evenList.includes(this.draggedItem)) {
   this.evenList = this.evenList.filter(i => i !== this.draggedItem);
  } else if (this.oddList.includes(this.draggedItem)) {
   this.oddList = this.oddList.filter(i => i !== this.draggedItem);
  }
  // Add to target list
  if (targetList == 'even') {
   this.evenList.push(this.draggedItem);
  } else if (targetList == 'odd') {
   this.oddList.push(this.draggedItem);
  } else {
   this.numberList.push(this.draggedItem);
  }
  this.draggedItem = null;
 }

 onDragOver(event: DragEvent) {
  event.preventDefault();
 }
}
