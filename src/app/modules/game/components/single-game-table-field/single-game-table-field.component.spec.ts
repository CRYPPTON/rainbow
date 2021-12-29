import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGameTableFieldComponent } from './single-game-table-field.component';

describe('SingleGameTableFieldComponent', () => {
  let component: SingleGameTableFieldComponent;
  let fixture: ComponentFixture<SingleGameTableFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGameTableFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGameTableFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
