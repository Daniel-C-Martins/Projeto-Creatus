export interface User {
   id: string;
   name: string;
   email: string;
   password: string;
   level: 1 | 2 | 3 | 4 | 5;
}

export interface UserData {
   name: string;
   email: string;
   password: string;
   level: 1 | 2 | 3 | 4 | 5;
}

export interface UserToken {
   email: string;
   password: string;
}