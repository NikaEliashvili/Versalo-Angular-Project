export interface userInterface {
  id: string;
  userName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
}

export interface carInterface {
  carModel: string;
  carYear: string;
  carPrice: string;
  carCategory: string;
  Gearbox: string;
}
export interface carCardInterface {
  id: string;
  userId: string;
  carModel: string;
  carCategory: string;
  carYear: string;
  carPrice: string;
  carImg: string;
  carColor: string;
  Gearbox: string;
  cardetails: string;
  Wheel: string;
}
