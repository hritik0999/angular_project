import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class HeroService{
    myData={name:'Hritik'};
    getMyData=()=>{
        return this.myData.name;
    }
    getYourData=()=>{
        const myPromise=new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('promise is resolved');
            }, 1500);
        });
        return myPromise;
    }
}