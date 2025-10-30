import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
 selector: 'app-keyboard-animations',
 imports: [CommonModule],
 templateUrl: './keyboard-animations.html',
})
export class KeyboardAnimations {
 first_line = ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Prt Scr", "Pau", "Ins", "Del"];
 second_line = ["`<sup>~</sup>",
  "1<sup>!</sup>",
  "2<sup>@</sup>",
  "3<sup>#</sup>",
  "4<sup>$</sup>",
  "5<sup>%</sup>",
  "6<sup>^</sup>",
  "7<sup>&</sup>",
  "8<sup>*</sup>",
  "9<sup>(</sup>",
  "0<sup>)</sup>",
  "-<sup>_</sup>",
  "=<sup>+</sup>",
  `<sup><i class="fa-solid fa-arrow-left"></i></sup>`,
  "Home",
 ]

 third_line = [
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[<sup>{</sup>",
  "]<sup>}</sup>",
  `\<sup>|</sup>`,
  "PgUp"
 ]
 forth_line = [
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";<sup>:</sup>",
  `'<sup>"</sup>`,
  `Enter`,
  `PgDn`,
 ];
 fifth_line = [
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  `,<sup><</sup>`,
  `.<sup>></sup>`,
  `/<sup>?</sup>`,
  "Shift",
  `<i class="fa-solid fa-arrow-up"></i>`,
  "End"
 ];
 sixth_line = [
  "Ctrl",
  `<i class="fa-brands fa-windows"></i>`,
  "Alt",
  "Space",
  "Alt",
  `<i class="fa-solid fa-print"></i>`,
  "Ctrl",
  `<i class="fa-solid fa-arrow-left"></i>`,
  `<i class="fa-solid fa-arrow-down"></i>`,
  `<i class="fa-solid fa-arrow-right"></i>`,
 ]

}
