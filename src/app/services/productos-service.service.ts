import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../intefaces/productos.interface';
import { ProductoDescripcion } from '../intefaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  url = 'https://templateangular-59ee5.firebaseio.com/';
  productos: Producto[];
  loading = false;
  filterList: Producto[];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http
        .get<Producto[]>(this.url + 'productos_idx.json')
        .subscribe(result => {
          setTimeout(() => {
            this.loading = true;
            this.productos = result;
            this.filterList = this.productos;
            resolve();
          }, 250);
        });
    });
  }

  getProduct(id: string) {
    return this.http.get<ProductoDescripcion>(
      this.url + `productos/${id}.json`
    );
  }

  searchProducto(word: string) {
    if (this.productos.length === 0) {
      this.loadProducts().then(() => {
        this.productFilter(word);
      });
    } else {
      this.productFilter(word);
    }
  }

  productFilter(word: string) {
    if (word.length === 0) {
      this.filterList = this.productos;
    } else {
      this.filterList = [];
      const termino = word.toLocaleLowerCase();
      this.filterList = this.productos.filter(
        elem =>
          elem.titulo.toLocaleLowerCase().indexOf(termino) > -1 ||
          elem.categoria.toLocaleLowerCase().indexOf(termino) > -1
      );
    }
  }
}
