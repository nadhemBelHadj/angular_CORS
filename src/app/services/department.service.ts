import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from '../model/Department.model';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

apiURL: string = 'http://localhost:8888/api/departments/all';

constructor(private http : HttpClient) {
}


getAllDepts(): Observable<Department[]>{
  return this.http.get<Department[]>(this.apiURL);
}

}
