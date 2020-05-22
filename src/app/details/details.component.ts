import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private emp;
private id;
  constructor(private route: ActivatedRoute, private service: EmployeeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      this.service.getbyid(this.id).subscribe(response => {
        this.emp = response;
        console.log(this.emp);
      });
    });
  }

}
