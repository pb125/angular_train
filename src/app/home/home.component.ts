import { TrainService } from './../service/train.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data1:any;
data2:any=0;
form:any
  constructor(private train:TrainService , private router:Router , private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.train.getdata2()
    .subscribe(data=>{console.log(data)
      this.data1=data
      this.data2=this.data1.totalseats
      console.log(this.data2);

    })

    this.form=new FormGroup({
      seats:new FormControl(''),

    })
  }
    seat1(){
      //console.log(this.form.value)
       this.train.updateseat(this.form.value,).subscribe(result=>{
       console.log(result);
       this.ngOnInit()
     // this.router.navigate([''])

       })
   }
    }


