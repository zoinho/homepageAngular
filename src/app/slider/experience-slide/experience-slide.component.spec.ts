import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSlideComponent } from './experience-slide.component';

describe('ExperienceSlideComponent', () => {
  let component: ExperienceSlideComponent;
  let fixture: ComponentFixture<ExperienceSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
