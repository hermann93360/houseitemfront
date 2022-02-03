import {animate, animateChild, group, query, state, style, transition, trigger} from "@angular/animations";

export const routeAuthHouseAnimamtion = trigger('routeAnimations', [
  transition('register => connect', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ opacity: 1, left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, left: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1, left: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),

  transition('connect => register', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ opacity: 1, right: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, right: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1, right: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);

export const fadeAnimation = trigger('fade', [
  // ...
  state('open', style({
    opacity: 1
  })),
  state('closed', style({
    opacity: 0
  })),
  transition('open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ]),
])
