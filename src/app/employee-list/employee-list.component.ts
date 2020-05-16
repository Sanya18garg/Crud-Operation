import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
public emp: any;
  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.service.getall().subscribe(data => {
      this.emp = data; console.log(this.emp); });
  }
  viewdetails(id) {
    this.router.navigate(['/update', id]);
  }

}
