import Company from "./company";
import Trainer from "./trainers";

export default class TrainingSession{
    id:number;
    title!:string;
    hours!:number;
    cost!:number;
    objectives!:string;
    program!:string;
    trainerResponseDto:Trainer=new Trainer();
    companyRes:Company=new Company();
    endDate!:number[];
    startDate!:number[];
}