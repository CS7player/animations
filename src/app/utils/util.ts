import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class Util {

 /*..RegExp..*/
 static readonly wholeNumberRegex = new RegExp(/^\d+$/);

}
