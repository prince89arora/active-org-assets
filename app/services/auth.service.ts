import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router) {}
	
	// Check auth status for user before redirecting to 
	// requested controller. Redirect to login if not 
	// logged in
	canActivate(next: ActivatedRouteSnapshot, step: RouterStateSnapshot) {
		return true;
	}
} 