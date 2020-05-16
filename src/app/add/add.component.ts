import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private service: EmployeeService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      mobile: [''],
      password: ['']
    });
  }
adduser() {
  console.log(this.employeeForm.value);
  this.service.createuser(this.employeeForm.value).subscribe(response => {
    console.log('User has been added');
    alert('New Employee has been added');

  });
}
}
