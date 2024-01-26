import Skill from "./skills";

export default class Trainer{
    id!:number;
    name!:string;
    email!:string;
    remarks!:string;
    // trainingSessions:
    skillsList:Skill[]=[];
    // user
}