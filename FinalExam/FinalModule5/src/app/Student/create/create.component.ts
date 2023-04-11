import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { Teacher } from 'src/app/model/teacher';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formStudent: FormGroup;
  students: Student = {};
  teacherList: Teacher[] = [];

  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private router: Router,
    private active: ActivatedRoute,
    private formBuild: FormBuilder
  ) { }

  ngOnInit(): void {
    this.teacherService.getAll2().subscribe(data => {
      this.teacherList = data
    });

    this.buildFormStudent();
    if (this.router.url.includes("/student/create")) {
      return;
    }
    this.active.paramMap.subscribe((pa: ParamMap) => {
      const activeID = pa.get("id");
      this.studentService.findByID(activeID).subscribe(data => {
        this.students = data;
        this.buildFormStudent();
      });
    });
  }


  submitStudent() {
    this.students = this.formStudent.value;
    this.studentService.save(this.students).subscribe(data => {
      this.router.navigateByUrl("/list")
    })
  }

  buildFormStudent() {
    this.formStudent = this.formBuild.group({
      id: [this.students === undefined ? "" : this.students.id],
      name: [this.students === undefined ? "" : this.students.name, [Validators.required]],
      group: [this.students === undefined ? "" : this.students.group, [Validators.required]],
      subject: [this.students === undefined ? "" : this.students.subject, [Validators.required]],
      teacher: [this.students === undefined ? "" : this.students.teacher, [Validators.required]],
      email: [this.students === undefined ? "" : this.students.email, [Validators.required, Validators.email]],
      phone: [this.students === undefined ? "" : this.students.phone, [Validators.required, Validators.pattern('^([\\d]{10}|[\\d]{11}|[\\d]{12})')]]

    })
  }

}
