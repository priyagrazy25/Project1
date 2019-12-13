import { Component, OnInit } from '@angular/core';
import { Paymentservice } from '../service/payment.service';
import { Payment } from '../models/payment.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import * as $ from 'jquery';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
  paymentform: FormGroup;
  pay: Payment;
  payment: any;
  userdata: any;
  submitted = false;
  valid: string;
  cancel: string;
  updatestatus:any;
  constructor(private paymentservice: Paymentservice, private myRoute: Router) {
    this.myRoute.navigateByUrl("/paymentdetails");
    this.pay = new Payment();
    this.paymentform = new FormGroup({
      Username: new FormControl()
    });
    this.paymentservice.getpaymentDatafromApI().subscribe((data) => {
      console.log('get data', data);
      this.payment = data;
    })
  }
  get f() { return this.paymentform.controls; }

  CheckStatus() {
    this.submitted = true;
    if (this.paymentform.valid) {
      this.pay.Username = this.paymentform.value.Username;
      console.log(this.pay);
      this.paymentservice.CheckStatus(this.pay).subscribe(res => {
        this.userdata = res;
        console.log('check status', res);
      })
    }
  }
  TakeTest(Testdate) {
    let today = new Date().toLocaleDateString()
    console.log(today)
    if (Testdate == today) {
      console.log('date same');
      this.myRoute.navigateByUrl("/taketest");
    }
    else {
      console.log('date not same');
      alert("Your are Unable to take test today!!");
    }
  }
  TestCancel(Testid) {
    var r = confirm("Are sure wants to Cancel the Test?");
    if (r == true) {
      console.log("ok");
      // $('#TestCancel').attr("disabled", true);
      // $('#TakeTest').attr("disabled", true);
      this.cancel = "Canceled!!"
      console.log('t id',Testid);
      this.paymentservice.updatestatus(Testid)
      this.myRoute.navigateByUrl("/paymentdetail")
    }
  }
  ngOnInit() {

  }

}
