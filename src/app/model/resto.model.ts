export interface Restaurant {
  id: number;
  price: number;
  name: string;
  categories: string;
  note: number;
  imgName: string;
  regime: string;
}
export interface Menu {
  id: number;
  nom: string;
  numero;
}
export interface MenuItem {
  id: number;
  idMenu: number;
  nom: string;
  prixMax: number;
  prixMin: number;
}

export interface PlatMenuItem {
  id: number;
  idMenuItem: number;
  idPlat: number;
  nom: string;
}
export interface Plat {
  id: number;
  nom: string;
  prix: number;
  categorie: string;
  note: number;
  imgName: string;
  regime: string;
}
