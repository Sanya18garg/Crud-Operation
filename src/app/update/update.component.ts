import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  userObj: any;
  id;
  userForm = this.fb.group({
    id: [''],
    name: [''],
    email: [''],
    mobile: [''],
    password: ['']
  });
  constructor(private fb: FormBuilder, private service: EmployeeService, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.service.getbyid(this.id).subscribe(response => {
          this.userObj = response;
      });
    });
  }
  updates() {
    console.log(this.userForm.value);
    this.service.update(this.userForm.value).subscribe(response => {
     // console.log('User has been added');
      alert('New Employee has been added');

    });
  }
  updateuser() {
    this.service.update(this.userObj).subscribe(data => {
      console.log(data);
      alert('Employee is Updated');
    });
  }
}
