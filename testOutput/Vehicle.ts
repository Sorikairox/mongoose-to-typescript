import VehicleBrand from './VehicleBrand';
import VehicleModel from './VehicleModel';
import Customer from './Customer';
import AuthorizedWeightCategory from './AuthorizedWeightCategory';
import VehicleType from './VehicleType';
import Policy from './Policy';



class Vehicle
{
    public brand : VehicleBrand = VehicleBrand();
public model : VehicleModel = VehicleModel();
public immatriculation : string = "";
public owner : Customer = Customer();
public authorizedWeight : number = 0;
public authorizedWeightCaterogy : AuthorizedWeightCategory = AuthorizedWeightCategory();
public type : VehicleType = VehicleType();
public power : number = 0;
public seatNumber : number = 0;
public enterDate : Date = new Date();
public leaveDate : Date = new Date();
public releaseDate : Date = new Date();
public buyPrice : number = 0;
public rebuyPrice : number = 0;
public validated : boolean = true;
public version : string = "";
public mineType : string = "";
public policy : Policy = Policy();
public _id : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;


    constructor(){}
}