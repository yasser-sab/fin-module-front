import Role from "./roles";

export default class User{
    id!:number;
    username!:string;
    email!:string;
    password!:string;
    roles:Role[]=[];
}