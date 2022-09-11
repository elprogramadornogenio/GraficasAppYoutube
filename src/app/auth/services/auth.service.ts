import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth() {
    return this._auth;
  }

  constructor(private http: HttpClient) { 
    if(!localStorage.getItem('cuenta')) {
      return;
    } else {
      this._auth = JSON.parse(localStorage.getItem('cuenta')!) || undefined;
    }
  }

  login(username: string, password: string) {
    return this.http.get<Auth>(`${this.baseUrl}/usuario/1`).pipe(
      map(resp => {
        console.log(username, resp.email);
        console.log(password, resp.password);
        if(username === resp.email && password === resp.password) {
          return this._auth = resp;
        }
        console.log("error");
        return undefined;
      }  
      ),
      tap(resp=>{
        this._auth = resp;
      }),
      tap(resp =>{
        if(resp !== undefined) {
          localStorage.setItem('id', resp.id);
          localStorage.setItem('cuenta', JSON.stringify(resp));
        }
      })
    )
  }

  verificarAutenticacion(): Observable<boolean> {
    if(!localStorage.getItem('id')) {
      return of(false);
    }

    return this.http.get<Auth>( `${this.baseUrl}/usuario/1`).pipe(
      map(resp =>{
        this._auth = resp;
        return true;
      })
    )

    
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('cuenta');
    localStorage.removeItem('id');
  }

}
