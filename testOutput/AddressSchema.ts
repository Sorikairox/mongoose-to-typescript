import Department from './Department';
import Region from './Region';
import Country from './Country';



class AddressSchema
{
    public number : string = "";
public street_name : string = "";
public complement : string = "";
public postalCode : string = "";
public department : Department = Department();
public region : Region = Region();
public country : Country = Country();
public _id : string = "";


    constructor(){}
}