import Company from "./company";
import Trainer from "./trainers";

export default class TrainingSession{
    id:number;
    title!:string;
    hours!:number;
    cost!:number;
    objectives!:string;
    program!:string;
    trainer!:Trainer;
    company!:Company;
    startDate:number[]=[];
    endDate:number[]=[];
}