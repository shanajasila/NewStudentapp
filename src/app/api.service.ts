import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchstudent=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  addstudent=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/add",dataTosend)
  }
  searchstudent=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/search",dataTosend)
  }
  deletestudent=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/delete",dataTosend)
  }
}

