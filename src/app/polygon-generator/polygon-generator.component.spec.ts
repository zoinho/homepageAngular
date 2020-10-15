import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonGeneratorComponent } from './polygon-generator.component';

describe('PolygonGeneratorComponent', () => {
  let component: PolygonGeneratorComponent;
  let fixture: ComponentFixture<PolygonGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
