import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  // uname: string;
  // psw: string;
  // msg: string;
  // mycolor: string

  // constructor(private router:Router) { }
  
  // ngOnInit() {
  // }
 
  // submit(){
  //   if(this.uname==='admin' && this.psw==='admin123'){
  //     this.router.navigate(['home']);
  //   } else {
  //     this.msg='Not successful login';
  //     this.mycolor='red';
  //   }
  // }

  constructor(private userService : UserService , private routes: Router) { }
  msg: string;
  ngOnInit() {
  }
  submit(uname, pwd)
  {
    var output = this.userService.checkusernameandpassword(uname, pwd);
    if(output == true)
    {
      this.routes.navigate(['/home']);
    }
    else{
      this.msg ='Invalid username or password';
    }
  }

}
