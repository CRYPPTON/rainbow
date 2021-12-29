import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowGameComponent } from './rainbow-game.component';

describe('RainbowGameComponent', () => {
  let component: RainbowGameComponent;
  let fixture: ComponentFixture<RainbowGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainbowGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbowGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
