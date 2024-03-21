import { Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
})
export class LoginComponent {
	username: string = "";
	password: string = "";

	constructor(private as: AuthService) {}

	ngOnInit(): void {}

	async login() {
		try {
			// disable input and button
			let response = await this.as.loginWithUsernameAndPassword(this.username, this.password);
			console.log("Show response: ", response);
			// TODO: Redirect
		} catch (e) {
			console.error(e); // Show error message
		}
	}
}
