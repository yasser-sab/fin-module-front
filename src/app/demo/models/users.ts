import Role from "./roles";

export default class User{
    username!:string;
    email!:string;
    password!:string;
    roles:Role[]=[];
}