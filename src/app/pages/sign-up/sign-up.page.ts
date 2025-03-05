import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    ReactiveFormsModule,
  ],
})
export class SignUpPage implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signUpForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  onSubmit() {
    if (
      this.signUpForm.value.password != this.signUpForm.value.confirmPassword
    ) {
      alert('Passwords do not match');
      return;
    }
    this.userService.addUser(this.signUpForm.value).subscribe(() => {
      console.log('User added');
    });
  }

  ngOnInit() {}
}
