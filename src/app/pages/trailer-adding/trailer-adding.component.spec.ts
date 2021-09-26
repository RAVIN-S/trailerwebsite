import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerAddingComponent } from './trailer-adding.component';

describe('TrailerAddingComponent', () => {
  let component: TrailerAddingComponent;
  let fixture: ComponentFixture<TrailerAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailerAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
