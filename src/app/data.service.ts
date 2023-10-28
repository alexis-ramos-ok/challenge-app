import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data = new BehaviorSubject<any[]>([
    // tus datos aquí
  ]);

  get data(): Observable<any[]> {
    return this._data.asObservable();
  }

  updateData(newData: any[]) {
    this._data.next(newData);
  }
}
