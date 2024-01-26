import TrainingSession from "./trainingSession";

export default class Company{
    id!:number;
    name!:string;
    address!:string;
    phoneNumber!:string;
    url!:string;
    email!:string;
    trainingSessions:TrainingSession[]=[];
}