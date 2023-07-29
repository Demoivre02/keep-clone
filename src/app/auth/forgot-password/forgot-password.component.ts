import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email = new FormControl()

  constructor( private auth : AuthServiceService ){}

  onClick(){
    this.auth.forgotPassword(this.email.value)
  }

  onFormSubmit(event : Event){
    event.preventDefault()
  }

}
