import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHomePageComponent } from './room-home-page.component';

describe('RoomHomePageComponent', () => {
  let component: RoomHomePageComponent;
  let fixture: ComponentFixture<RoomHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
