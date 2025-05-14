import { Component, OnInit } from '@angular/core';
import { Department } from '../model/Department.model';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-departments',
  imports: [],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent implements OnInit{
 
 departments! : Department[]
 
 constructor(private deptService: DepartmentService) { }
 
  ngOnInit(): void {

    this.deptService.getAllDepts().subscribe(depts => {
        console.log(depts);
        this.departments = depts;
    });

  }



}
