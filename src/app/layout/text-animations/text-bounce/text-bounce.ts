import { Component } from '@angular/core';
import { Textfield } from '../../../reusable/textfield/textfield';

@Component({
 selector: 'app-text-bounce',
 imports: [Textfield],
 templateUrl: './text-bounce.html',
})
export class TextBounce {
 sampleText: string = "Bounce";
}
