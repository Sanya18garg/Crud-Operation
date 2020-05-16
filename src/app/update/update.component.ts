import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  userObj: any;
  id;

  constructor(private service: EmployeeService, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.service.getbyid(this.id).subscribe(response => {
        this.userObj = response;
        console.log(this.userObj);
      });
    });
  }
  updates() {
    return this.http.put('http://localhost:3000/users', this.userObj).subscribe(data => {
      console.log(data);
    });
  }
  updateuser() {
    this.service.update(this.userObj).subscribe(data=>{
      console.log(data);
      alert('Employee is Updated');
    });
  }
}
