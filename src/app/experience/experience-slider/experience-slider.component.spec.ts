import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSliderComponent } from './experience-slider.component';

describe('ExperienceSliderComponent', () => {
  let component: ExperienceSliderComponent;
  let fixture: ComponentFixture<ExperienceSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
