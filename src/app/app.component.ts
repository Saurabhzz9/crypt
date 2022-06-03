import { Component } from '@angular/core';
import { CurrencyService } from 'src/service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Crypto-app';
  selectedCurrency : string = "INR";
  constructor(private currencyService: CurrencyService){}
  sendCurrency(event:string){
   this.currencyService.setCurrency(event)
  }
}
