import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  url1='https://secure-everglades-97459.herokuapp.com/api/train/'


  constructor(private http:HttpClient) { }

  getdata2(){
    return this.http.get(this.url1+'seatdisplay')
  }

  updateseat(data:any){
    return this.http.post(this.url1+'seatupdate/',data)
  }

}
