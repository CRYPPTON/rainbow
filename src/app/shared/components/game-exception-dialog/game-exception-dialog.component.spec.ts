import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameExceptionDialogComponent } from './game-exception-dialog.component';

describe('GameExceptionDialogComponent', () => {
  let component: GameExceptionDialogComponent;
  let fixture: ComponentFixture<GameExceptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameExceptionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameExceptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
