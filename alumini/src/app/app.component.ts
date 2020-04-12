import { Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'alumini';
  details=[]
  selected=""
  sort=""
  bool=false
  ngOnInit():void{
    this.details=[]
    this.http.get<any>('http://localhost:3000/get/alldetails').subscribe((data)=>{
      for(let i=0;i<data.length;i++){
        
        this.details.push([
          data[i].firstname,
          data[i].lastname,
          data[i].image,
          data[i].rollnumber,
          data[i].dateofbirth,
          data[i].email,
          data[i].gender,
          data[i].passedout,
          data[i].institution,
          data[i].branch,
          data[i].batch,
          data[i].company,
          data[i].desgination,
          data[i].location,
          data[i].phonenumber
        ])
       
      }
    })
  }
  constructor(private http:HttpClient){}
 
  onselect(){
    if(this.sort==="" || this.selected===""){
      return
    }
    if(this.sort==="name"){
    var params={location:this.selected,name:"firstname"}
    }
    else{
      var params={location:this.selected,name:"batch"}
    }
    this.details=[]
    this.http.get<any>('http://localhost:3000/get/details',{params}).subscribe((data)=>{
     
      for(let i=0;i<data.length;i++){
        
        this.details.push([
          data[i].firstname,
          data[i].lastname,
          data[i].image,
          data[i].rollnumber,
          data[i].dateofbirth,
          data[i].email,
          data[i].gender,
          data[i].passedout,
          data[i].institution,
          data[i].branch,
          data[i].batch,
          data[i].company,
          data[i].desgination,
          data[i].location,
          data[i].phonenumber
        ])
       
      }
    
    })

  }
}
