import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareItemComponent } from './square-item.component';

describe('SquareItemComponent', () => {
  let component: SquareItemComponent;
  let fixture: ComponentFixture<SquareItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
