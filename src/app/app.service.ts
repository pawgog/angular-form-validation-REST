import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private http: Http) { }
  
  postUsersAPI(data: any[]) : Observable<any>{
      return this.http.post("https://private-77a70-testdummyapi.apiary-mock.com/idv/process", data);
    }  

  onSubmit(customerNumber: number, birth : string, postCode : string, lastName : string, telephone : string ) : Observable<any>{
    const headers = new Headers({'Content-Type': 'application/json'});
    const url = "https://private-77a70-testdummyapi.apiary-mock.com/idv/process";
    return Observable.forkJoin(
          this.http.put(url, {id: 1, answer : customerNumber},{headers: headers}),
          this.http.put(url, {id: 2, answer : birth},{headers: headers}),
          this.http.put(url, {id: 3, answer : postCode},{headers: headers}),
          this.http.put(url, {id: 4, answer : lastName},{headers: headers}),
          this.http.put(url, {id: 5, answer : telephone},{headers: headers})
    );
  }
}
