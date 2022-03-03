import { HeroService } from './hero.service';
import { TestBed } from '@angular/core/testing';

describe('heroservicetest',()=>{
    let myService:HeroService;
    beforeEach(()=>{
        myService=new HeroService();
    })

    //mydata should have the value hritik
    it('mydata should have the value hritik',()=>{
        expect(myService.myData.name).toBe('Hritik');
    });

    //getMyData should return the value hritik
    it('getMyData should return the value hritik',()=>{
        expect(myService.getMyData()).toBe('Hritik');
    });
});
