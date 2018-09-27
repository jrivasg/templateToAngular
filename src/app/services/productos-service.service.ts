import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  url = 'https://templateangular-59ee5.firebaseio.com/';
  productos: Producto[];
  loading = false;

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http
      .get<Producto[]>(this.url + 'productos_idx.json')
      .subscribe(result => {
        setTimeout(() => {
          this.loading = true;
          this.productos = result;
        }, 500);
      });
  }
}
