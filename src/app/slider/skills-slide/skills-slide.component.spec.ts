import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSlideComponent } from './skills-slide.component';

describe('SkillsSlideComponent', () => {
  let component: SkillsSlideComponent;
  let fixture: ComponentFixture<SkillsSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
