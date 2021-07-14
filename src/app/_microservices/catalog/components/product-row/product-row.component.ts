import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../catalog.model';

@Component({
  selector: 'ngx-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {

  }

}
