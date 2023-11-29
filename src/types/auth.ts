export interface ILoginRequest {
  email: string;
  password: string;
}
export interface ILoginResponse {
  success: boolean;
  trace_id: string;
  errors?: IError[];
  data?: IData;
}
export interface IData {
  user: IUser;
  access_token: string;
  refresh_token: string;
}
export interface IUser {
  user_id: number;
  first_name: string;
  last_name: string;
  image: string;
  image_uploaded: null;
  username: string;
  email: string;
  status_id: number;
  roles: IRole[];
}
export interface IRole {
  name: string;
  role_id: number;
  description: null;
}
export interface IError {
  message: string;
  code: string;
}
