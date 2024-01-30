import Participant from "./participants";
import Trainer from "./trainers";
import TrainingSession from "./trainingSession";

export default class Evaluation{
    id:number;
    pedagogicalQuality:number;
    pace:number;
    courseSupport:number;
    practicalExercises:number;
    masteryOfSubject:number;
    participantId:number;
    trainerId:number;
    trainingSessionId:number;
}