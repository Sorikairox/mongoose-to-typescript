import FieldType from './FieldType';
import Adress from './Address';



class Person
{
    public firstname : string = "";
public lastname : string = "";
public age : number = 0;
public drivingLicenseDate : Date = new Date();
public birthdate : Date = new Date();
public sex : string = "";
public field : FieldType = FieldType();
public address : Address = Address();
public _id : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public description : string = "";
public phoneNumber : Array = [];
public website : string = "";
public fax : string = "";
public email : string = "";
public solde : number = 0;
public reference : string = "";
public __v : number = 0;
public type : string = "";


    constructor(){}
}