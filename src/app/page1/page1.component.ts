import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient,
    private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.http.get('assets/products.json').subscribe((data: any) => {
      this.products = data as Product[];
      this.dataService.setData(this.products);
    });
  }  
}