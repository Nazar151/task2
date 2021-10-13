import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<Observable<any[]>> {
  private Url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  resolve(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.Url);
  }
}
