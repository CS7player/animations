import { CommonModule } from "@angular/common"
import { Component, EventEmitter, forwardRef, Input, Output } from "@angular/core"
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms"

@Component({
 selector: 'app-textfield',
 imports: [FormsModule, CommonModule],
 templateUrl: './textfield.html',
 providers: [
  { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Textfield), multi: true }
 ]
})
export class Textfield {
 @Input() label: string = "";
 @Input() placeholder: string = "";
 @Input() elementValue: string = "";
 @Input() showInfo: boolean = false;
 @Input() infoContent: string = 'No Content Found';
 @Input() readonly: boolean = false;
 @Input() disabled: boolean = false;
 @Input() required: boolean = false;
 @Output() elementValueChange: EventEmitter<string> = new EventEmitter<string>()
 isHover: boolean = false;
 onInputChange(event: Event): void {
  const input = event.target as HTMLInputElement
  this.elementValue = input.value
  this.elementValueChange.emit(this.elementValue)
 }

 onChange: (value: any) => void = () => { }
 onTouched: () => void = () => { }
 writeValue(value: any): void {
  if (value != null) { this.elementValue = value.elementValue || "" }
 }
 registerOnChange(fn: any): void { this.onChange = fn }
 registerOnTouched(fn: any): void { this.onTouched = fn }
 setDisabledState?(isDisabled: boolean): void { }

}
