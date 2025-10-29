import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
 selector: 'app-dialog-box',
 imports: [],
 templateUrl: './dialog-box.html',
})
export class DialogBox implements OnInit {
 @Input() contentObj: any = { type: 1, contentText: "" };
 @Output() close = new EventEmitter<boolean>();
 bgClass: string = ""
 instruction: string = "bg-green-200"
 waring: string = "bg-yellow-200"
 danger: string = "bg-red-200"
 constructor(private el: ElementRef) { }
 ngOnInit(): void {
  this.bgClass = this.instruction;
  if (this.contentObj.type == 2) {
   this.bgClass = this.waring
  }
  if (this.contentObj.type == 3) {
   this.bgClass = this.danger
  }
  const dialog: HTMLDialogElement | null = this.el.nativeElement.querySelector('#myDialog');
  if (dialog && !dialog.open) {
   dialog.showModal();
  }
 }

 closeDialog(): void {
  const dialog: HTMLDialogElement | null = this.el.nativeElement.querySelector('#myDialog');
  dialog?.close();
  this.close.emit(false);
 }
}
