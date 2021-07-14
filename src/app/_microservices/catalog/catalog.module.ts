import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ThemeModule } from '@/_theme/theme.module';

const ngModules = [
  ThemeModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductRowComponent,
  ],
  imports: [
    CatalogRoutingModule,
    CommonModule,
    ...ngModules,
  ],
})
export class CatalogModule { }
