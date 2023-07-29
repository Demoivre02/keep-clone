import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth : AuthServiceService){}

  email = new FormControl()
  password = new FormControl()

  onClick(){
    console.log("These are my details"  +
    this.email.value,
    this.password.value
    );
    this.auth.register(
      this.email.value,
      this.password.value
    )
  }

  onFormSubmit(event:Event){
    event.preventDefault();
  }

}
