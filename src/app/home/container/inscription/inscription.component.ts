import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
 

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  name:string;
  email:string;
  password:string;
  confirmpassword:string;
  users :any = [{}];
  myform:FormGroup;

  constructor(private route : Router) { }

  ngOnInit() {
    this.myform= new FormGroup({

      Formname : new FormControl('',Validators.required),
      Formemail : new  FormControl('',[Validators.required,Validators.email]),
      Formpassword : new  FormControl('',[Validators.required,Validators.minLength(8)]),
      Formconfirmpassword : new  FormControl('',[Validators.required,Validators.minLength(8)]),
    })

    if(localStorage.getItem('users')){

      this.users=JSON.parse(localStorage.getItem('users'));
    }
  }
register(){
  let data={

    Name:this.name,
    Email:this.email,
    password:this.password
  }
  this.users.push(data)
  localStorage.setItem('users',JSON.stringify(this.users));
  this.route.navigate(['/'])
}
}
