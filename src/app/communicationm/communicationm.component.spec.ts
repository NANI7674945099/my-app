import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationmComponent } from './communicationm.component';

describe('CommunicationmComponent', () => {
  let component: CommunicationmComponent;
  let fixture: ComponentFixture<CommunicationmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
