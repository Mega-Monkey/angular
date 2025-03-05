import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LogInPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  email = signal('');
  password = signal('');

  login() {
    console.log('Email: ', this.email(), 'Password: ', this.password());
  }

  register() {
    console.log('Email: ', this.email(), 'Password: ', this.password());
  }
}
