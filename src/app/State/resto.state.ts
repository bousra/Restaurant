export enum DataStateEnumResto {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR'
}

export enum ProductActionsTypesResto {
  GET_ALL_PRODUCTS = '[Product] Get All Products',
  GET_ENTREES_PRODUCTS = '[Product] Get Entrees Products',
  GET_SALADES_PRODUCTS = '[Product] Get Salades Products',
  GET_RESISTANCE_PRODUCTS = '[Product] Get Resistance Products',
  GET_DESSERTS_PRODUCTS = '[Product] Get Dessert Products',
  GET_BOISSONS_PRODUCTS = '[Product] Get Boisson Products',
  SEARCH_PRODUCTS = '[Product] Search Products',
  GET_PRODUCT = '[Product] Get Product'
}
export enum EventProductActionsTypesResto {
  GET_BIO_PRODUCTS = '[Product] Get Bio Products',
  GET_VEGAN_PRODUCTS = '[Product] Get Vegan Products',
  GET_VEGETARIEN_PRODUCTS = '[Product] Get Végétarien Products',
  GET_SANS_GLUTEN_PRODUCTS = '[Product] Get Sans Gluten Products',
}
export enum EventPlace{
  MENU_CATEGORIES_EVENT= 'MENU CATEGORIES EVENT',
  MENU_REGIME_EVENT = 'REGIME MENU EVENT'
}

export interface ActionEventResto{
  type: ProductActionsTypesResto | EventProductActionsTypesResto;
  payload?: any;
}
export interface  AppDataStateResto<T> {
  dataState?: DataStateEnumResto;
  data?: T;
  errorMessage?: string;
  actionTypes?: ProductActionsTypesResto;
  eventRegimeActionTypes?: EventProductActionsTypesResto;
}

