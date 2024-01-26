import Skill from "./skills";

export default class Signper{
    name!:string;
    surname!:string;
    dateOfBirth:number[]=[];
    city!:string;
    email!:string;
    phoneNumber!:string;
    skillsList:Skill[]=[];
    password!:string;
}