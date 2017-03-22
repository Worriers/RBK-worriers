import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';
import { GradsService } from '../shared/grads.service';
import { GradsComponent } from './grads.component';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../shared/test-data.service';




describe('GradsComponent', () => {
  let component: GradsComponent;
  let fixture: ComponentFixture<GradsComponent>;

  // beforeEach(async(() => {

  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GradsComponent ],
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      providers: [ GradsService ]
    })
    .compileComponents();

    const gradsService = TestBed.get(GradsService);
    fixture = TestBed.createComponent(GradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be a component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a storage variable for grads objects', () => {
    expect(component.grads).toBeTruthy();
  });

  // it('should have a method for getting grads data from server', () => {
  //   expect(component.getGrads).toHaveBeenCalled();
  // });

  it('should display right data from server', () => {
    expect(component.grads).toContain({id: 11, username: 'nice', name: 'Mr. Nice', currentJob : 'Web Developer', img: 'https://avatars0.githubusercontent.com/u/139426?v=3&s=400', age: 23, gitHub: 'http://github.com/MontaserRahmani', linkedIn: 'http://linkedin.com', cohort: 2});
    console.log(component.grads);
  });

});
