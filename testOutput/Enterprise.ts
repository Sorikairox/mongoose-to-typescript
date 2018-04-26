import FieldType from './FieldType';
import HeadcountType from './HeadcountType';
import Adress from './Address';



class Enterprise
{
    public name : string = "";
public field : FieldType = FieldType();
public siret : string = "";
public naf : string = "";
public turnover : number = 0;
public capital : number = 0;
public headcount : HeadcountType = HeadcountType();
public _id : string = "";
public address : Address = Address();
public description : string = "";
public phoneNumber : Array = [];
public website : string = "";
public fax : string = "";
public email : string = "";
public solde : number = 0;
public reference : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;
public type : string = "";


    constructor(){}
}