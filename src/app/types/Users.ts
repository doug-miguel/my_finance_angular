export interface IUserLogin {
  email: string,
  password: string
}

export interface IRegistration {
  name: string,
  email: string,
  password: string
}

export interface IUserData {
  message: string;
  token: string;
  userModel: UserModel;
}
export interface UserModel {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
}

