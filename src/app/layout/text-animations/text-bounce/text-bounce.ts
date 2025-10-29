import { Component, inject, OnInit } from '@angular/core';
import { Textfield } from '../../../reusable/textfield/textfield';
import { Util } from '../../../utils/util';
@Component({
 selector: 'app-text-bounce',
 imports: [Textfield],
 templateUrl: './text-bounce.html',
})
export class TextBounce implements OnInit {

 sampleText: string = "Bounce";
 totalAnimationTime: any = 2;
 numberExpression = Util.wholeNumberRegex;
 letterDelay: number = 0;
 ngOnInit(): void {
  this.letterDelay = Number((this.totalAnimationTime / this.sampleText.length).toFixed(2));
 }

}
