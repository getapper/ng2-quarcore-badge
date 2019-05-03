import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarcoreBadgeComponent } from './quarcore-badge.component';

describe('QuarcoreBadgeComponent', () => {
  let component: QuarcoreBadgeComponent;
  let fixture: ComponentFixture<QuarcoreBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarcoreBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarcoreBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
