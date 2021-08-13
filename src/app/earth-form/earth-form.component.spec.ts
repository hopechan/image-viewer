import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthFormComponent } from './earth-form.component';

describe('EarthFormComponent', () => {
  let component: EarthFormComponent;
  let fixture: ComponentFixture<EarthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
