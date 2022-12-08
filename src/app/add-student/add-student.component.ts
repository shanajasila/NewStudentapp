import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  id=""
  name=""
  admno=""
  rollno=""
  college=""

  constructor(private api:ApiService){}
  readValue=()=>{
    let data={"id":this.id,"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
    this.api.addstudent(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status="success"){
          alert("Student added Successfully")
          this.admno=""
          this.college=""
          this.name=""
          this.rollno=""
        }
      }
    )
  }
}
