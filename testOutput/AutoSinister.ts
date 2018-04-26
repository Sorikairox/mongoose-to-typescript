import Vehicle from './Vehicle';
import Adress from './Address';
import SinisterNatureCode from './SinisterNatureCode';
import SinisterStateCode from './SinisterStateCode';
import InsuranceCompany from './InsuranceCompany';
import SinisterNature from './SinisterNature';
import Policy from './Policy';
import Policy from './Policy';
import SinisterResponsability from './SinisterResponsability';



class AutoSinister
{
    public vehicle : Vehicle = Vehicle();
public thirdPartyImmatriculation : string = "";
public _id : string = "";
public expert : string = "";
public expertaddress : Address = Address();
public witnessaddress : Address = Address();
public reparatoraddress : Address = Address();
public circumstances : string = "";
public expertCode : string = "";
public GTACode : string = "";
public IDECode : string = "";
public natureCode : SinisterNatureCode = SinisterNatureCode();
public reparatorCode : string = "";
public statCode : string = "";
public state : SinisterStateCode = SinisterStateCode();
public thirdPartyInsuranceCompany : InsuranceCompany = InsuranceCompany();
public corporal : boolean = true;
public statCost : number = 0;
public cost : number = 0;
public evaluatedCost : number = 0;
public openDate : string = "";
public date : Date = new Date();
public damages : Array = [];
public events : Array = [];
public time : string = "";
public places : Array = [];
public nature : SinisterNature = SinisterNature();
public expertName : string = "";
public reparatorName : string = "";
public thirdPartyName : string = "";
public witnessName : string = "";
public notes : string = "";
public companyNumber : string = "";
public policy : Policy = Policy();
public reference : string = "";
public objects : Array = [];
public thirdPartyPolicy : Policy = Policy();
public responsability : SinisterResponsability = SinisterResponsability();
public expertPhoneNumber : string = "";
public reparatorPhoneNumber : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;
public __t : string = "";


    constructor(){}
}