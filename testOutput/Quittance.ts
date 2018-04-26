import InsuranceCompany from './InsuranceCompany';
import Policy from './Policy';
import QuittanceState from './QuittanceState';



class Quittance
{
    public reference : string = "";
public insuranceCompany : InsuranceCompany = InsuranceCompany();
public startDate : Date = new Date();
public endDate : Date = new Date();
public insuranceCompanyReceiptNumber : number = 0;
public cancellationDate : Date = new Date();
public cancellationReason : string = "";
public policy : Policy = Policy();
public state : QuittanceState = QuittanceState();
public confie : boolean = true;
public providers : Array = [];
public accountingDate : Date = new Date();
public primeTTC : number = 0;
public primeHT : number = 0;
public commission : number = 0;
public catNat : number = 0;
public fee : number = 0;
public honorary : number = 0;
public prepaymentAmount : number = 0;
public bonusOrIndice : number = 0;
public TVA : boolean = true;
public name : string = "";
public _id : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;


    constructor(){}
}