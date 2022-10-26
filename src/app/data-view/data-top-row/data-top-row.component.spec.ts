import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTopRowComponent } from './data-top-row.component';

describe('DataTopRowComponent', () => {
  let component: DataTopRowComponent;
  let fixture: ComponentFixture<DataTopRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTopRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTopRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
