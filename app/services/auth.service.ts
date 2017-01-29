import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { UserService } from './user.service'
 
@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router, private userService: UserService) {
		
	}
	
	// Check auth status for user before redirecting to 
	// requested controller. Redirect to login if not 
	// logged in
	canActivate(next: ActivatedRouteSnapshot, step: RouterStateSnapshot) {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(["login"]);	
			return false;
		}

		return true;
	}
} 