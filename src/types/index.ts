export enum Page {
  NOTFOUND = '/404',
  LOGIN = '/login',
  ACCOUNT = '/account',
  USER = '/user',
}

export type AccountStatusType = {
  [index: string]: string;
  '9999': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
};

export type Broker = {
  [index: string]: string;
  '209': string;
  '218': string;
  '230': string;
  '238': string;
  '240': string;
  '243': string;
  '247': string;
  '261': string;
  '262': string;
  '263': string;
  '264': string;
  '265': string;
  '266': string;
  '267': string;
  '268': string;
  '269': string;
  '270': string;
  '279': string;
  '280': string;
  '288': string;
  '287': string;
  '290': string;
  '291': string;
  '292': string;
  '271': string;
};

export type User = {
  email: string;
  password: string;
};

export type Column = {
  id: string;
  name: string;
};

export type UserInfo = {
  id: string;
  uuid: string;
  photo: string;
  name: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
};

export type AccountType = {
  id: string;
  user_id: string;
  uuid: string;
  status: string;
  broker_id: string;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  user: UserInfo;
};

export type Search = {
  pageNo: number;
  limit: number;
};
