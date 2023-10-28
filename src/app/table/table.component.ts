import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.data.subscribe(newData => {
      this.data = newData;
    });
  }
}
