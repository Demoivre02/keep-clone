import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ToastComponent } from 'src/app/toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  loggedIn: boolean = false;
  isToastReady: boolean = false; // Flag to track if toastComponent is ready

  constructor(private auth: AuthServiceService) {}

  email = new FormControl();
  password = new FormControl();

  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  ngAfterViewInit() {
    this.isToastReady = true;
  }

  onClick() {
    this.loggedIn = true;

    this.auth.login(this.email.value, this.password.value);
  }

  googleIn() {
    this.loggedIn = true;
    this.auth.logInWithGoogle();
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
  }
}
