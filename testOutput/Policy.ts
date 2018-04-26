import InsuranceCompany from './InsuranceCompany';
import PaymentFrequency from './PaymentFrequency';
import Customer from './Customer';



class Policy
{
    public reference : string = "";
public lastReference : string = "";
public description : string = "";
public insuranceCompany : InsuranceCompany = InsuranceCompany();
public externalReference : string = "";
public startDate : Date = new Date();
public endDate : Date = new Date();
public amendment : number = 0;
public amendmentDate : Date = new Date();
public deadline : Date = new Date();
public paymentFrequency : PaymentFrequency = PaymentFrequency();
public fee : number = 0;
public honorary : number = 0;
public discount : number = 0;
public cancellationDelay : number = 0;
public taxCode : string = "";
public yearlyTTC : number = 0;
public lastYearlyTTC : number = 0;
public comission : number = 0;
public insuredCustomer : Customer = Customer();
public _id : string = "";
public createdAt : Date = new Date();
public updatedAt : Date = new Date();
public __v : number = 0;


    constructor(){}
}