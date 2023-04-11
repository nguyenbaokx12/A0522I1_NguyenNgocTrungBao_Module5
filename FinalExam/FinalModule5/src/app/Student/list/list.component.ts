import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { Teacher } from 'src/app/model/teacher';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Student[] = [];
  student: Student;
  teacherList: Teacher[] = [];

  constructor(private studentService: StudentService,
              private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
    console.log("aaaa");

    this.getAll2();
  }

  getAll() {
    this.studentService.getAll().subscribe(data => {
      console.log("data");

      this.students = data;
    })
  }

  getAll2() {
    this.teacherService.getAll2().subscribe(data => {
      this.teacherList = data;
    })
  }

  

  getInfo(item) {
    this.student = item;
  }

  delete(){
    this.studentService.delete(this.student.id).subscribe(data=>{
      this.ngOnInit();
    })
  }

}
