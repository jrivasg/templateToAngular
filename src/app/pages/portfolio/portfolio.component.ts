import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public productosService: ProductosServiceService) { }

  ngOnInit() {
  }

}
