import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Menu, MenuItem, Plat, PlatMenuItem, Restaurant} from '../model/resto.model';

@Injectable({providedIn: 'root'})
export class RestoService {
  host = environment.host;
  constructor(private http: HttpClient) {
  }
  getResearchProducts(keyword: string | number): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.host + '/resto?name_like=' + keyword);
  }
  getProduct(tableName: string, attributName?: string, productId?: number): Observable<Restaurant>{
    return this.http.get<Restaurant>(this.host + '/' + tableName + '/' + productId);
  }
  getPlatMenuCatergorie<T>(tableName: string | null , attributName: string | null = null, wordGetName: string | number | null = null): Observable<T>{

    if (tableName !== null && tableName !== ''){

      if ( (attributName === null || attributName === '') && (wordGetName === null || wordGetName === '')){
        return this.http.get<T> (this.host + '/' + tableName );
      }
      else if ((attributName !== null || attributName !== '') && (wordGetName === null || wordGetName === '') ){
        return this.http.get<T>(this.host + '/' + tableName + '?' + attributName);
      }
      else if ((attributName !== null || attributName !== '') && (wordGetName !== null || wordGetName !== '')){

        return this.http.get<T>(this.host + '/' + tableName + '?' + attributName + '=' + wordGetName);
      }
    }

  }

  getMenuItem<T>(idMenItem: number): Observable<T> {
    const host = environment.host;
    return this.http.get<T>(host + '/menuItem/' + idMenItem);
  }
}
