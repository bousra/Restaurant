import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Restaurant} from '../model/resto.model';

@Injectable({providedIn: 'root'})
export class RestoService {
  constructor(private http: HttpClient) {
  }
  getAllProducts(): Observable<Restaurant[]>{
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto');
  }
  getEntreesProducts(): Observable<Restaurant[]>{
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?categories=entree');
  }
  getSaladesProducts(): Observable<Restaurant[]>{
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?categories=salade');
  }
  getResistanceProducts(): Observable<Restaurant[]>{
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?categories=resistance');
  }
  getDessertProducts(): Observable<Restaurant[]>{
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?categories=dessert');
  }
  getBoissonProducts(): Observable<Restaurant[]>{
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?categories=boisson');
  }
  getResearchProducts(keyword: string | number): Observable<Restaurant[]>{
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?name_like=' + keyword);
  }

  getBioProducts(): Observable<Restaurant[]> {
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?regime=bio');
  }


  getVeganProducts(): Observable<Restaurant[]> {
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?regime=vegan');
  }

  getVegetarienProducts(): Observable<Restaurant[]> {
    const host = environment.host;
    return this.http.get<Restaurant[]>(host + '/resto?regime=vegetarien');
  }

 getSansGlutenProducts(): Observable<Restaurant[]> {
   const host = environment.host;
   return this.http.get<Restaurant[]>(host + '/resto?regime=sansGluten');
  }
  getProduct(productId: number): Observable<Restaurant>{
    const host = environment.host;
    return this.http.get<Restaurant>(host + '/resto/' + productId);
  }
}
