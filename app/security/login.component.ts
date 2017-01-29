import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component ({
	selector: 'login',
  	template: require('./login.component.html')
})
export class Login {
	
	constructor(private userService: UserService) {
		console.log(userService.isLoggedIn());
	}
}
