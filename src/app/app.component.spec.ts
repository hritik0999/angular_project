import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeroService } from './heroes/hero.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  //should create the app
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //mydata should contain value hritik
  it('should contain value hritik',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const component=fixture.debugElement.componentInstance;
    expect(component.myData).toBe('Hritik');
  });

  //function return value of myData
  it('should return value of myData variable',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const component=fixture.componentInstance;
    expect(component.getData()).toBe('Hritik');
  });

  //it should test the data inside tags
  it('should check the data inside the tags',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const component=fixture.debugElement.componentInstance;
    const compile=fixture.nativeElement as HTMLElement;
    expect(compile.querySelector('h2')?.textContent).toContain('Hello i am in app component');
  })

  //hero service should have the name property to be hritik
  it('should have the name property to be hritik',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const component=fixture.componentInstance;
    const service=fixture.debugElement.injector.get(HeroService);
    fixture.detectChanges();
    expect(service.myData.name).toBe(component.username.name);
  });

  //hero service funciton getMyData should return the value hritik
  it('function getMyData should return the value hritik',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const component=fixture.debugElement.componentInstance;
    const service=fixture.debugElement.injector.get(HeroService);
    fixture.detectChanges();
    expect(service.getMyData()).toBe('Hritik');
  });

  //function returns and the value both should be same
  it('function retun and the value both should be same',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const component=fixture.debugElement.componentInstance;
    const service=fixture.debugElement.injector.get(HeroService);
    const spy=spyOn(service,'getYourData').and.returnValue(Promise.resolve('data'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component.getYourUserData).toBe('data');
    })
  });
});
