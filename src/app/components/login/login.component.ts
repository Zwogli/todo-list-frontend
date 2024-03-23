import { Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
})
export class LoginComponent {
	username: string = "";
	password: string = "";

	constructor(private as: AuthService, private router: Router) {}

	ngOnInit(): void {}

	async login() {
		try {
			// disable input and button
			let response: any = await this.as.loginWithUsernameAndPassword(
				this.username,
				this.password
			);
			console.log("Show response: ", response);
			const responseToken = response.token;
			localStorage.setItem('token', responseToken)
			this.router.navigateByUrl("/todos");
		} catch (e) {
			alert("Login fehlgeschlagen!");
			console.error(e); // Show error message
		}
	}
}
