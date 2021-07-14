import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../../catalog.model';

export interface ProductTableItem {
  description: string;
  category: string;
  price: number;
}

@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {

  productsAsync: Observable<Array<Product>>;
  constructor(private productSvc: ProductService) { }

  ngOnInit(): void {

    this.productsAsync = this.productSvc.getAllProducts();
  }

  ngOnDestroy(): void {

  }

  probar() {
    // let prod: Product {
    //   se
    // }
    // this.productSvc.createProduct().subscribe(console.log)

  }
}
