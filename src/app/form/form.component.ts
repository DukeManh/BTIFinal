import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form: User;
  error: Error;

  constructor(private auth: AuthService, private router: Router) {
    this.form = new User('', '');
    this.error = new Error('', '');
  }

  validate(): boolean{
    if (!this.form.userName.length || !this.form.userName.match(/[a-zA-Z0-9]*/g)){
      this.error.userName = 'Username cannot be empty and contain only letters and numbers';
    }
    else{
      this.error.userName = '';
    }
    if (!this.form.password.length || !this.form.password.match(/[a-zA-Z0-9]*/g)){
      this.error.password = 'Password cannot be empty and contain only letters and numbers';
    }
    else{
      this.error.password = '';
    }
    return !this.error.password && !this.error.userName;
  }

  async onSubmit(): Promise<void>{
    if (this.validate()){
      this.auth.login(this.form);
      const user = await this.auth.getUser();
      if (user){
        this.router.navigate(['contactus']);
      }
      else{
        alert('Username orr password is incorrect');
      }
      }
    }

  ngOnInit(): void {
  }

}


class Error{
  constructor(public userName: string, public password: string){}
}
