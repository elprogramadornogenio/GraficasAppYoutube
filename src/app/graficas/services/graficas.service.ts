import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private urlBase: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDiosesBarra(posicion: number) {
    return this.http.get(`${this.urlBase}/grafica`).pipe(
      map((data: any) => {
        const labels = Object.keys(data[posicion]);
        const values: number[] = Object.values(data[posicion]);
        return {labels, values} 
      })
    );
  }


}
