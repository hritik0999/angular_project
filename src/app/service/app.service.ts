import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AppService{
    constructor(private http:HttpClient){}

    shareUserInfo(name,email,password){
        return this.http.post(`http://157.245.106.193:3045/api/register`,{
        name: name,
        email: email,
        password: password});
    }
}
