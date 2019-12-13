import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment.model';



@Injectable()
export class Paymentservice {
    payment: Payment
    constructor(private myhttp: HttpClient) {

    }
    getpaymentDatafromApI() {
        console.log('in service');
        return this.myhttp.get("http://localhost:62550/api/Payment");
    }
    CheckStatus(pay: Payment) {
        return this.myhttp.get("http://localhost:62550/api/Payment" + "?" + "Username=" + pay.Username);
    }
    updatestatus(Testid:string){
        console.log(Testid);
       return this.myhttp.put("http://localhost:62550/api/Payment?testid="+Testid,"").subscribe((data)=>{
            console.log(data);
        });
    }
}
