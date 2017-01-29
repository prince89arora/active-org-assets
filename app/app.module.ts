import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {routing} from './app.routes';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {Home} from './home';
import {About} from './about';
import { Login } from './security/login.component';
import { NavBarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ConstantService } from './services/constant.service';
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        LocalStorageModule
    ],
    declarations: [
        AppComponent,
        Home, About, NavBarComponent, Login
    ],
    providers: [AuthService, UserService, ConstantService],
    bootstrap: [AppComponent]
})
export class AppModule {}
