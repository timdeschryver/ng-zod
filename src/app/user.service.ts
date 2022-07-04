import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import type {Observable} from "rxjs";
import {UsersSchema, UserSchema} from "./user.model";
import type {User} from "./user.model";
import {parseResponse} from "./parse-response.operator";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      parseResponse(UserSchema),
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      parseResponse(UsersSchema),
    );
  }
}
