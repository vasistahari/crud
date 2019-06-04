import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  page = '';
  headerMenu = 1;

  headers = { headers: new Headers({ 'content-type': 'application/Json' }) };
  options = new RequestOptions();

  constructor(private _http: Http) {}

  getcallsetup() {
    return this.callApi('http://192.168.0.140:1500/helloworld', 'get', {});
  }
  updateData(temp) {
    console.log('EDIT DATA', temp);
    return this.callApi('http://192.168.0.140:1500/editData', 'post', temp);
  }
  addData(add) {
    console.log('ADD DATA', add);
    return this.callApi('http://192.168.0.140:1500/addData', 'post', add);
  }
  deleteData(del) {
    console.log(del);
    console.log('Delete DATA');
    return this.callApi('http://192.168.0.140:1500/deleteData', 'post', del);
  }

  callApi(url, method, body = null): Observable<any> {
    switch (method.toUpperCase()) {
      case 'LOGIN':
        return this._http.post(url, body).pipe(map((response: Response) => response.json()));
      case 'POST':
        return this._http
          .post(url, body, this.token())
          .pipe(map((response: Response) => response.json()));

      case 'PATCH':
        return this._http
          .patch(url, body, this.token())
          .pipe(map((response: Response) => response.json()));

      case 'DELETE':
        return this._http
          .delete(url, this.token())
          .pipe(map((response: Response) => response.json()));

      // case 'GET':
      //     return this._http.get(url, this.token()).pipe(map((response: Response) => response.json()));

      case 'GET':
        return this._http.get(url, body).pipe(map((response: Response) => response.json()));
    }
  }

  token() {
    return new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'BEARER ' + sessionStorage.getItem('token')
      })
    });
  }
}
