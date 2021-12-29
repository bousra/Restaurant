import {DataStateEnumResto} from './resto.state';

export interface AppDataMenu<T> {
  dataState?: DataStateEnumResto;
  idCurentMenuItem?: number;
  data?: T;
  errorMessage?: string;
}
