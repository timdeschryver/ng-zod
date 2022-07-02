import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import type {Observable} from "rxjs";
import {UsersSchema, UserSchema} from "./user.model";
import type {User} from "./user.model";
import {validateResponse} from "./validate.response";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      validateResponse(UserSchema),
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      validateResponse(UsersSchema),
    );
  }
}
