import {
  animate,
  animateChild,
  group,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

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




export const routeAnimationFade = trigger('routeAnimationsFade', [
  transition('access => configure', [
    query(':enter',
      [
        style({ opacity: 0 })
      ],
      { optional: true }
    ),

    query(':leave',
      [
        style({ position: 'absolute', opacity: 1, width: '100%'}),
        animate('0.5s', style({ opacity: 0 }))
      ],
      { optional: true }
    ),

    query(':enter',
      [
        style({ position: 'absolute', opacity: 0, width: '100%', height:'100%' }),
        animate('0.5s', style({ opacity: 1 }))
      ],
      { optional: true }
    )
    /*
    query(':enter, :leave', [
      style({
        opacity: 0
      })
    ]),
    query(':enter', [
      style({ opacity: 1 })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1}))
      ])
    ]),
    query(':enter', animateChild()),

     */
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

export const navAnimation = trigger('nav', [
  // ...
  state('open', style({
    zIndex: 6,
    opacity: 1,
    left: '0'

  })),
  state('closed', style({
    opacity: 0,
    zIndex: -1,
    left: '-100%'
  })),
  transition('open => closed', [
    animate('300ms ease-out', ),
  ]),
  transition('closed => open', [
    animate('200ms ease-out')
  ]),

])

export const navButtonAnimation = trigger('navButton', [
  // ...
  state('open', style({
    left: '85px',
    zIndex: 6
  })),
  state('closed', style({
    left: 0
  })),
  transition('open => closed', [
    animate('200ms ease-out')
  ]),
  transition('closed => open', [
    animate('200ms ease-out')
  ]),
])

export const bgAnimation = trigger('bg', [
  // ...

  state('open', style({
    zIndex: 1,
    opacity: 0.5
  })),
  state('closed', style({
    zIndex: -1,
    opacity: 0,

  })),

  transition('open => closed', [
    style({
      display: 'none'
    }),
    animate('200ms ease-out')
  ]),
  transition('closed => open', [
    animate('200ms ease-out')
  ]),

])

export const upAnimation = trigger('upAnimation', [
  // ...
  state('up', style({
    position: 'absolute',
    top: '20%'
  })),
  state('normal', style({

  })),
  transition('normal => up', [
    animate('150ms ease-out')
  ]),
])

export const upAddAnimation = trigger('up', [
  // ...
  state('open', style({
    zIndex: 6,
    opacity: 1,
    bottom: '-1px',

  })),
  state('closed', style({
    opacity: 0,
    zIndex: -5,
    bottom: '-50%',
    height: 0

  })),
  transition('open => closed', [
    animate('900ms ease-out')
  ]),
  transition('closed => open', [
    animate('400ms ease-out')
  ]),

])

export const windowAnimation = trigger('windowAnimation', [

  transition(':enter', [
    group([
      sequence([
        query(".container-course",[
          style({
            height: 0,
            width: 0,
            opacity: 0
          }),
          animate('450ms cubic-bezier(.65,.3,.24,1.64)', style({
            height: '100%',
            width: '100%',
            opacity: 1
          })),
        ])
      ])
    ])

  ]),

])

export const popAnimation = trigger('pop', [
  transition(':enter', [
    group([
      sequence([
        query(".pop",[
          style({
            marginTop: '600px',
            opacity: 0
          }),
          animate('450ms cubic-bezier(.65,.3,.24,1.64)', style({
            marginTop: '300px',
            opacity: 1,
            zIndex: 3
          })),
        ])
      ]),
      sequence([
        query(".bg",[
        style({
          opacity: 0
        }),
        animate('450ms ease-out', style({
          opacity: 0.4,
          zIndex: 2
        })),
      ]),

      ])
    ])

  ]),
  transition(':leave', [
    group([
      sequence([
      query(".pop",[
        animate('650ms cubic-bezier(.74,-0.78,.45,.93)', style({
          marginTop: '600px',
          opacity: 0
        })),
      ])
    ]),
      sequence([
        query(".bg",[

          animate('450ms ease-out', style({
            opacity: 0
          })),
        ]),

      ])

    ])
  ])

])
