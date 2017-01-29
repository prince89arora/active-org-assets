import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { ConstantService } from './constant.service'
import { LocalStorageModule } from 'angular-2-local-storage';

@Injectable()
export class UserService {
	
	status = false;

	constructor(
		private http: Http, 
		private constant: ConstantService,
		private localStorage: LocalStorageModule
	) {
		console.log("constructor:: UserService");
		if (localStorage != undefined) {
			console.log("Found localstorage..");	
		}
	}

	login( username, password ) {
		
	} 

	isLoggedIn() {
		return this.status;	
	}
}