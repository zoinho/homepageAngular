import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { reduce } from 'rxjs/operators';

export const routeAnimations =
trigger('routeAnimations',[
  transition('* <=> *', [
      group([ query(':enter', [
        style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'calc(100%)',
            height: '100%',
            transform: 'translateX(100%)'
        }),  
    ], {optional: true}),
    query(':leave', [
      style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: 'calc(100%)',
          height: '100%',
          transform: 'translateX(0%)'
      }),  
  ], {optional: true}),]),
     
      query(':leave', [
        animate('600ms cubic-bezier(0.27, 0.06, 0.25, 1)', 
        style({
            transform: 'translateX(100%)'

        }))
    ], {optional: true}),
        query(':enter', [
            animate('1200ms cubic-bezier(0.27, 0.06, 0.25, 1)', 
            style({
              transform: 'translateX(0%)'
          }))
        ], {optional: true}),
        
      
  ])
])


// Fade Animation
trigger('routeFadeAnimation', [
    transition('* => *', [
        query(':enter', [style({ opacity: 0 })], {
        	optional: true,
        }),
        group([
            query(
                ':leave',
                [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
                { optional: true }
            ),
            query(
                ':enter',
                [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
                { optional: true }
            ),
        ]),
    ]),
]);
