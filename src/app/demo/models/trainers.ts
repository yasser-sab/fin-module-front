import Skill from "./skills";
import TrainingSession from "./trainingSession";
import User from "./users";

export default class Trainer{
    id!:number;
    name!:string;
    email!:string;
    remarks!:string;
    skills:Skill[]=[];
    user:User;
    trainingSessions:TrainingSession[]=[];
}