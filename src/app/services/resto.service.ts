import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Restaurant} from '../model/resto.model';

@Injectable({providedIn: 'root'})
export class RestoService {
  constructor(private http: HttpClient) {
  }
  getResearchProducts(keyword: string | number): Observable<Restaurant[]>{
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?name_like=' + keyword);
  }
  getProduct(tableName: string, attributName?: string, productId?: number): Observable<Restaurant>{
    const host = environment.host;
    return this.http.get<Restaurant>(host + '/' + tableName + '/' + productId);
  }
  getCustum(tableName: string | null = 'resto', attributName: string | null = null, wordGetName: string | null = null): Observable<Restaurant[]>{
    const host = environment.host;
    console.log(host + '/' + tableName + '?' + attributName);
    if (tableName !== null && tableName !== ''){

      if ( (attributName === null || attributName === '') && (wordGetName === null || wordGetName === '')){
        return this.http.get<Restaurant[]>(host + '/' + tableName );
      }
      else if ((attributName !== null || attributName !== '') && (wordGetName === null || wordGetName === '') ){
        return this.http.get<Restaurant[]>(host + '/' + tableName + '?' + attributName);
      }
      else if ((attributName !== null || attributName !== '') && (wordGetName !== null || wordGetName !== '')){

        return this.http.get<Restaurant[]>(host + '/' + tableName + '?' + attributName + '=' + wordGetName);
      }
    }

  }
}
