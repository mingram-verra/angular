import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private dataSource = new BehaviorSubject<any>([]);
  currentData = this.dataSource.asObservable();
  setData(data: Object[]) {
    this.dataSource.next(data)
  }
}