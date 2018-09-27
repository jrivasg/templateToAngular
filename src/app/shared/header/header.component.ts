import { ProductosServiceService } from './../../services/productos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private productoService: ProductosServiceService) {}

  ngOnInit() {}

  searchProduct(search: string) {
    this.productoService.searchProducto(search);
  }
}
