import VehicleBrand from './VehicleBrand';



class VehicleModel
{
    public name : string = "";
public brand : VehicleBrand = VehicleBrand();
public _id : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;


    constructor(){}
}