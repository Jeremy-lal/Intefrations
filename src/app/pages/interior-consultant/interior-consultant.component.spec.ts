import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorConsultantComponent } from './interior-consultant.component';

describe('InteriorConsultantComponent', () => {
  let component: InteriorConsultantComponent;
  let fixture: ComponentFixture<InteriorConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
