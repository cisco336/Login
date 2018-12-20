import { trigger, state, transition, animate, style } from '@angular/animations';

export const fade = trigger('fade', [
    state('Login', style({
        opacity: 0,
        transform: 'translateY(400px)',
        height: '0px',
        padding: '0',
        margin: '0',
        'z-index': -1,
        overflow: 'hidden'
    })),
    state('Register', style({ opacity: 1, transform: 'translateY(0px)'  })),
    transition('* => *', animate('0.8s cubic-bezier(.90,-0.5,0,1.90)'))
]);
