import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation} from 'app/animations/slide-in-out-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
