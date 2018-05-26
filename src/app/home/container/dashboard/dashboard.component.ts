import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';
import { Title } from '@angular/platform-browser';
import {CrudService} from '../../../shared/crud.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
  cars: any=[];

  constructor(private http:HttpClient,private crud : CrudService) { }

  ngOnInit() {
   
    this.getAll();
  }
  getAll(){
    this.crud.getAllCars().subscribe(data=>{this.cars= data;})

  }
  deleteCarById(id,marque){
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this "+marque+"?",
      icon: "warning",
      dangerMode: true,
     
    })
    .then((willDelete) => {
      if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
      });
      this.crud.deleteCarById(id)
      .subscribe(data=>{
      
      console.log(data);
      this.getAll();
      
      })
      } else {
      swal("Your car file is safe!");
      }
      });
    }      
}
