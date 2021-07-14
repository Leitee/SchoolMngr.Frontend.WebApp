import { ApiBaseService } from '@/_core/backend/api/api-base.service';
import { PopupHandlerService } from '@/_core/services/popup-handler.service';
import { EnableWsNotification } from '@/_shared/decorators/enable-notification.decorator';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../catalog.model';


@Injectable({ providedIn: 'root' })
export class ProductService extends ApiBaseService<Product> {

    constructor(http: HttpClient, wsNotifSvc: PopupHandlerService) {
        super(http, wsNotifSvc);
    }

    @EnableWsNotification()
    getAllProducts(): Observable<Array<Product>> {
        this.path = 'catalog/products';
        return this.getAll();
    }

    getProduct(id: string): Observable<Product> {
        this.path = 'catalog/products';
        return this.getSingleById(id);
    }

    createProduct(product: Product): Observable<Product> {
        this.path = 'catalog/products';
        return this.post(product);
    }

    deleteProduct(id: string): Observable<boolean> {
        this.path = 'catalog/products';
        return this.delete(id);
    }

    updateProduct(id: string, product: Product): Observable<boolean> {
        this.path = 'catalog/products';
        return this.patch(id, product);
    }

    getProductsByFitnerId(id: string): Observable<Array<Product>> {
        this.path = 'catalog/products/fitner';
        return this.getListByIdString(id);
    }

}
