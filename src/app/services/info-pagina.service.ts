import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../intefaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  url = 'https://templateangular-59ee5.firebaseio.com/';
  equipo: Equipo;

  constructor(private http: HttpClient) {
    this.loadTeam();
  }

  private loadTeam() {
    this.http.get<Equipo>(this.url + 'equipo.json').subscribe(result => {
      this.equipo = result;
    });
  }
}
