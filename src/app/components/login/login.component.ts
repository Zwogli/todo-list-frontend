import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  async login() {
    try {
      // disable input and button
      let response = await this.loginWithUsernameAndPassword(
        this.username,
        this.password
      );
      console.log('Show response: ', response);

      // TODO: Redirect
    } catch (e) {
      console.error(e); // Show error message
    }
  }

  loginWithUsernameAndPassword(username: string, password: string) {
    const url = environment.baseUrl + '/login/';
    const body = {
      username: username,
      password: password,
    };
    return lastValueFrom(this.http.post(url, body));
  }
}
