import {Component} from '@angular/core';
import {UserService} from "./user.service";
import {UsersSchema} from "./user.model";
import type {User} from "./user.model";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <label for="perf">Performance tester (open the console):</label>
    <input id="perf" type="number" value="1000" (input)="time($any($event.target).value)">
    <hr/>
    <pre>{{ users$ | async | json }}</pre>
  `
})
export class AppComponent {
  users$ = this.userService.getUser(1).pipe(map(user => {
    return {
      name: `${user.name.trim()} (${user.username.toLocaleLowerCase()})`,
    }
  }));

  constructor(private userService: UserService) {
  }

  time(length: number): void {
    const perf = `length=${length}`;
    const user: User = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }

    const users = Array.from({length}).map((_, i) => ({...user, id: i + 1}));
    console.time(perf);
    UsersSchema.parse(users);
    console.timeEnd(perf);
  }
}
