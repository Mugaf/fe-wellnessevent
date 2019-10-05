import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApproveComponent } from './modal-approve.component';

describe('ModalApproveComponent', () => {
  let component: ModalApproveComponent;
  let fixture: ComponentFixture<ModalApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
