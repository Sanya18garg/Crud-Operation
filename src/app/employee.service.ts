import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  createuser(user) {
    return this.http.post('http://localhost:3000/users', user);
  }
  getall() {
    return this.http.get('http://localhost:3000/users');
  }
  getbyid(id) {
    return this.http.get('http://localhost:3000/users/' + id);
  }
  update(user) {
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }
  delete(user) {
    return this.http.delete('http://localhost:3000/users/' + user.id);
  }
}
