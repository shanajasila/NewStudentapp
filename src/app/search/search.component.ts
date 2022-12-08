import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  rollno=""
  searchData:any=[]
  constructor(private api:ApiService,private route:Router){}
  readValue=()=>{
    let data={"rollno":this.rollno}
    console.log(data)
    this.api.searchstudent(data).subscribe(
        (response:any)=>{
          console.log(response)
          if(response.length ==0){
            alert("Student not found")
          }
          else{
            this.searchData=response;
          }
        }
    )
  }

  id=""
  deleteClick=(id:any)=>{

    let data:any={"id":id}
    console.log(data)
    this.api.deletestudent(data).subscribe(
      (response:any)=>{
        console.log(response)

        if(response.status="success"){
          alert("Student deleted Successfully")
          this.searchData=[]
          this.rollno=""
          this.route.navigate(['/search'])
          
        }
        else{
          alert("Student not found")
          this.rollno=""
        }
      }
    )
  }
}
