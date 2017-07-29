import { Component, OnInit, OnDestroy  } from '@angular/core';
import {slideInOutAnimation} from 'app/animations/slide-in-out-animation';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: Observable<any>;
  id: string;
  private sub1: any;
  private sub2: any;

  constructor(private route: ActivatedRoute,private uS: UserService) { }

  ngOnInit() {
    this.sub1 = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
       this.user = this.uS.getUserById(this.id);
       this.sub2 = this.user.subscribe(u => console.log(u));
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
