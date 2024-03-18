import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  async loginWithUsernameAndPAssword() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      username: this.username,
      password: this.password,
    });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      // disable input and button
      let response = await fetch(
        'http://127.0.0.1:8000/login/',
        requestOptions
      );
      let json = await response.json();
      localStorage.setItem('token', json.token);
      // TODO: Redirect
    } catch (e) {
      console.error(e); // Show error message
    }
  }
}
