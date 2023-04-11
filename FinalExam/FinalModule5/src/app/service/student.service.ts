import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student: Student[] = [];
  private url = "http://localhost:3000/student";

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  delete(id): Observable<Student>{
    return this.http.delete<Student>(this.url + '/' + id);
  }
  

  save(students){
    if (students.id){
      return this.http.put(this.url + '/' + students.id,students);
    }
    return this.http.post(this.url,students);
  }

  findByID(id) : Observable<Student>{
    return this.http.get<Student>(this.url + '/' + id);
  }

}
