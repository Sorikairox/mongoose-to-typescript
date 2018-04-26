import Adress from './Address';



class Customer
{
    public address : Address = Address();
public description : string = "";
public phoneNumber : Array = [];
public website : string = "";
public fax : string = "";
public email : string = "";
public solde : number = 0;
public reference : string = "";
public _id : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;


    constructor(){}
}