import { Component, OnInit } from '@angular/core';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vista3',
  templateUrl: './vista3.component.html',
  styleUrls: ['./vista3.component.scss']
})
export class Vista3Component implements OnInit {
  options: Option[] = [
    {value: 'favorite', viewValue: 'Selecciona tu paquete favorito'},
    {value: 'contact', viewValue: 'Contacto'},
    {value: 'subscribe', viewValue: 'Suscripción al boletín'}
  ];
  selected = this.options[0].value;

  constructor() { }

  ngOnInit(): void {
  }
}
