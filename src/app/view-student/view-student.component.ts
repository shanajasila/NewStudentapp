import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  constructor(private api:ApiService){
    api.fetchstudent().subscribe(
      (response)=>{
        this.student=response
      }
    )
  }

  student:any=[]
}
