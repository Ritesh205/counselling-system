import { Component, OnInit } from '@angular/core';

import { EmpService } from '../service/emp.service';
import { Employee } from '../model/employee';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData;

  constructor(private empService: EmpService) { }

  ngOnInit() {
    this.empService.getData().subscribe((result)=>{
      this.empData = result;
    });
  }
}
