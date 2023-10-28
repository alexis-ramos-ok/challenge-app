import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vista2',
  template: `<app-table></app-table>`,
  styleUrls: ['./vista2.component.scss']
})
export class Vista2Component implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.updateData([
      { ID: '1', Channel: 'HBO', Show: 'Game of Thrones', Time: '20:00 - 21:00' },
      { ID: '2', Channel: 'Netflix', Show: 'Stranger Things', Time: '21:00 - 22:00' },
      { ID: '3', Channel: 'Disney+', Show: 'The Mandalorian', Time: '22:00 - 23:00' },
      { ID: '4', Channel: 'Amazon Prime', Show: 'The Boys', Time: '23:00 - 00:00' },
      { ID: '5', Channel: 'Hulu', Show: 'The Handmaid\'s Tale', Time: '00:00 - 01:00' },
      // más datos aquí
    ]);
  }
}
