import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

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

export const slideFromRight = 
trigger('slideFromRight', [
    transition(':enter', [
        style({
            transform: 'translate3d(150%, 0, 0)',
            'margin-bottom': '-10rem'
        }),
            animate('4s cubic-bezier(0.27, 0.06, 0.25, 1)', keyframes([
                style({
                    transform: 'translate3d(30%,0rem,0)',
                    offset: 0.1
                }),
                style({
                    transform: 'translate3d(0%,0rem,0)',
                    offset: 0.85
                }),
                style({
                    transform: 'translate3d(0%,0rem,0)',
                    'margin-bottom': '-10rem',
                    offset: 0.9
                }),
                style({
                    transform: 'translate3d(0%,0rem,0)',
                    'margin-bottom': '0rem',
                    offset: 1
                }),
                
            ]))
    ])
  
])

export const slideFromLeft = 
trigger('slideFromLeft', [
    transition(':enter', [
        style({
            transform: 'translate3d(-150%, 0, 0)',
        }),
            animate('4s cubic-bezier(0.27, 0.06, 0.25, 1)', keyframes([
                style({
                    transform: 'translate3d(-30%,0rem,0)',
                    offset: 0.1
                }),
                style({
                    transform: 'translate3d(0%,0rem,0)',
                    offset: 0.85
                }),
                style({
                    transform: 'translate3d(0%,0rem,0)',
                    offset: 0.9
                }),
                style({
                    transform: 'translate3d(0%,0rem,0)',
                    offset: 1
                }),
                
            ]))
    ])
  
])
