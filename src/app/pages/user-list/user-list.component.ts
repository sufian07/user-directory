import { Component, OnInit, OnDestroy } from '@angular/core';
import { slideInOutAnimation } from 'app/animations/slide-in-out-animation';
import { UserService } from 'app/services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class UserListComponent implements OnInit, OnDestroy {
  users: Observable<any>;
  private sub: any;

  constructor(private uS: UserService) { }

  ngOnInit() {
    this.users = this.uS.getUsers();
    this.sub = this.users.subscribe(users => {});
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
