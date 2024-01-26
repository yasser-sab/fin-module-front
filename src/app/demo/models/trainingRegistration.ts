import Participant from "./participants";
import TrainingSession from "./trainingSession";

export default class TrainingRegistration{
    id!:number;
    registrationDate:number[]=[];
    participant!:Participant;
    trainingSession!:TrainingSession;
}