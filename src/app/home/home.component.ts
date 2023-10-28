import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({transform: 'translateX(-100%)'})),
      state('*', style({transform: 'translateX(0)'})),
      transition('void => *', animate('1s ease-in')),
    ]),
    trigger('slideInOpposite', [
      state('void', style({transform: 'translateX(100%)'})),
      state('*', style({transform: 'translateX(0)'})),
      transition('void => *', animate('1s ease-in')),
    ]),
    trigger('fadeIn', [
      state('void', style({opacity: 0})),
      state('*', style({opacity: 1})),
      transition('void => *', animate('2s ease-in')),
    ])
  ]
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToVista1(): void {
    this.router.navigateByUrl('/vista1');
  }
}
