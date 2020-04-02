import {Injectable} from '@angular/core';
import {LoginResponse} from '../Login/loginResponse';

@Injectable({
    providedIn: 'root'
})
export class StorageService{

    constructor() {
    }

    private loginResponse: LoginResponse = new LoginResponse();

    setLoginResponse(val){
        this.loginResponse = val;
    }

    getLoginResponse(){

        return this.loginResponse;
    }


}
