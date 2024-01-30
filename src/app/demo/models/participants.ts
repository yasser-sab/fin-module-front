import TrainingSession from "./trainingSession";
import User from "./users";

export default class Participant{
    id!:number;
    name!:string;
    surname!:string;
    dateOfBirth:number[]=[];
    city!:string;
    email!:string;
    phoneNumber!:string;
    user:User=new User();
    trainingSessions:TrainingSession[]=[]
}