import { Component, OnInit } from '@angular/core';
import {Ui} from '../shared/services/ui.service';

@Component({
  selector: 'app-beer-fund',
  templateUrl: './beer-fund.component.html',
  styleUrls: ['./beer-fund.component.css']
})
export class BeerFundComponent implements OnInit {

  buttons: any[] = [
    {
      text: 'PayPal',
      link: 'https://www.paypal.com/paypalme/VictorMatthewsX?locale.x=en_US',
      fontSet: 'fab',
      fontIcon: 'fa-paypal',
    },
    {
      text: 'Venmo',
      link: 'https://www.venmo.com/VictorMatthewsX',
      fontSet: 'fab',
      fontIcon: 'fa-vimeo-v',
    },
    {
      text: 'Cash App',
      link: 'https://cash.app/$VictorMatthewsX',
      fontSet: 'fa',
      fontIcon: 'fa-dollar-sign',
    },
  ];

  constructor(private ui: Ui) { }

  ngOnInit(): void {
    this.ui.hideMenu = true;
  }

}
