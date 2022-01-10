import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Menu, MenuItem, Plat, PlatMenuItem, Restaurant} from '../model/resto.model';
import {retry} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class RestoService {
  constructor(private http: HttpClient) {
  }
  getResearchProducts(keyword: string | number): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.getHost() + '/resto?name_like=' + keyword);
  }
  getProduct(tableName: string, attributName?: string, productId?: number): Observable<Restaurant>{
    return this.http.get<Restaurant>(this.getHost() + '/' + tableName + '/' + productId);
  }
  getPlatMenuCatergorie<T>(tableName: string | null , attributName: string | null = null, wordGetName: string | number | null = null): Observable<T>{

    if (tableName !== null && tableName !== ''){

      if ( (attributName === null || attributName === '') && (wordGetName === null || wordGetName === '')){
        return this.http.get<T> (this.getHost() + '/' + tableName );
      }
      else if ((attributName !== null || attributName !== '') && (wordGetName === null || wordGetName === '') ){
        return this.http.get<T>(this.getHost() + '/' + tableName + '?' + attributName);
      }
      else if ((attributName !== null || attributName !== '') && (wordGetName !== null || wordGetName !== '')){
        console.log('je suis ici');
        return this.http.get<T>(this.getHost() + '/' + tableName + '?' + attributName + '=' + wordGetName);
      }
    }

  }

  getMenuItem<T>(idMenItem: number): Observable<T> {
    return this.http.get<T>(this.getHost() + '/menuItem/' + idMenItem);
  }
  delete(product: Plat): Observable<void>{

    return this.http.delete<void>(this.getHost() + '/commande/' + product.id);
  }

  getHost(): string {
    return environment.host;
  }
}
