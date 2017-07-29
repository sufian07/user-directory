import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation} from 'app/animations/slide-in-out-animation';


@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css'],
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class ConnectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
