import { Component, Input } from '@angular/core';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterData: string[] = [];

  constructor(private dataService: DataService) {   
  }

  ngOnInit(): void {
    this.dataService.currentData.subscribe((data) => {
      data.forEach((element: any) => {
          this.filterData.push(element.name);
      });
    });
  }
}
