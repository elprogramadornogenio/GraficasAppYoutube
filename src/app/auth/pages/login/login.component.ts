import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(auth =>{
      console.log(auth);
      if(auth === undefined) {
        return;
      }
      if(auth.id) {
        console.log(auth);
        this.router.navigate(['./graficas']);
      }
    })
  }

}
