import { trigger, state, style, transition, animate } from '@angular/animations';

// slideLeftInOut animation
export const slideLeftInOut = trigger('slideLeftInOut', [
 state('in', style({ transform: 'translateX(0%)' })),
 transition('void => *', [
  style({ transform: 'translateX(-100%)' }),
  animate('200ms ease-out')
 ]),
 transition('* => void', [
  animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
 ])
]);
