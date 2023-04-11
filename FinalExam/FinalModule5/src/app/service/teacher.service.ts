import { Injectable } from '@angular/core';
import { Teacher } from '../model/teacher';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacher: Teacher[] = [];
  private url = "http://localhost:3000/teacher";

  constructor(private http: HttpClient) { }

  getAll2(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url)
  }
}
