import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoDescriptionComponent } from './algo-description.component';

describe('AlgoDescriptionComponent', () => {
  let component: AlgoDescriptionComponent;
  let fixture: ComponentFixture<AlgoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
