import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisheaderComponent } from './visheader.component';

describe('VisheaderComponent', () => {
  let component: VisheaderComponent;
  let fixture: ComponentFixture<VisheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
