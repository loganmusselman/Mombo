import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/user';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  getUsers(): Observable<User[]> {
    return this.http.get(baseURL + 'users')
      .map(res => { return this.ProcessHttpmsgService.extractData(res);})
        .catch(error => {return this.ProcessHttpmsgService.handleError(error);});
  }

  getUser(id: number): Observable<User> {
    return this.http.get(baseURL + 'users/' + id)
      .map(res => { return this.ProcessHttpmsgService.extractData(res);})
        .catch(error => {return this.ProcessHttpmsgService.handleError(error);});

  }


}
