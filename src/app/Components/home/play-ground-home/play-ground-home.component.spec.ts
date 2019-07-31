import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGroundHomeComponent } from './play-ground-home.component';

describe('PlayGroundHomeComponent', () => {
  let component: PlayGroundHomeComponent;
  let fixture: ComponentFixture<PlayGroundHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayGroundHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayGroundHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
