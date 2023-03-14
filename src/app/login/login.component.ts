import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserService } from '../shared/services/loginser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
  constructor(private fb:FormBuilder,private service:LoginserService,private route:Router){}
  ngOnInit(): void {
    this.loginform = this.fb.group({
      email_id: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
 logindata(){
  const formData = new FormData();
    formData.append('email_id', this.loginform.value.email_id);
    formData.append('password', this.loginform.value.password);

    if(this.loginform.valid){
      this.service.postlogin(formData).subscribe(data=>{
        if(data){
          console.log(data);
          alert("Login Success");
        }
        else{
          alert("Something Went Wrong")
        }
      })
      this.route.navigate(['dashboard'])
    }
   
    console.log(formData);
  }

}
