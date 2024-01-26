import Privilege from "./privileges";

export default class Autority{
    userRole!:string;
    privileges:Privilege[]=[];

    constructor(userRole:string,privileges:Privilege[]){
        this.userRole=userRole;
        this.privileges=privileges;
    }
}