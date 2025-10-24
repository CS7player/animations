import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class Util {

 /*..RegExp..*/
 static wholeNumberRegex = new RegExp(/^\d+$/);


 static isNumber(value: any) {
  return typeof value === 'number' && !isNaN(value);
 }
}
