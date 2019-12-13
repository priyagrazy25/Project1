import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { Paymentservice } from './service/payment.service';
import { TaketestComponent } from './taketest/taketest.component';

const myRoutes: Route[] = [{ path: 'paymentdetails', component: PaymentdetailsComponent},
 {path: 'taketest', component: TaketestComponent}]

@NgModule({
  declarations: [
    AppComponent,
    PaymentdetailsComponent,
    TaketestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Paymentservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
