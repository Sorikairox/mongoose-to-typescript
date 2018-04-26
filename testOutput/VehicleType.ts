import AuthorizedWeightCategory from './AuthorizedWeightCategory';



class VehicleType
{
    public name : string = "";
public authorizedWeight : AuthorizedWeightCategory = AuthorizedWeightCategory();
public _id : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;


    constructor(){}
}