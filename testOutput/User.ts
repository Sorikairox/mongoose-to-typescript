import Position from './Position';
import Role from './Role';
import Adress from './Address';



class User
{
    public firstname : string = "";
public lastname : string = "";
public email : string = "";
public password : string = "";
public position : Position = Position();
public role : Role = Role();
public phoneNumber : string = "";
public address : Address = Address();
public _id : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;


    constructor(){}
}