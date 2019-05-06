import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2QuarcoreBadgeComponent } from './ng2-quarcore-badge.component';

describe('Ng2QuarcoreBadgeComponent', () => {
  let component: Ng2QuarcoreBadgeComponent;
  let fixture: ComponentFixture<Ng2QuarcoreBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2QuarcoreBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2QuarcoreBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
