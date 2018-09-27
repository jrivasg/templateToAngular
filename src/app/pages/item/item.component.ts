import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductoDescripcion } from '../../intefaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param['id'];

      this.productoService.getProduct(param['id']).subscribe(prod => {
        this.producto = prod;
      });
    });
  }
}
