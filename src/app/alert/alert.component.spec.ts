/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DfaAlertComponent } from './alert.component';

describe('DfaAlertComponent', () => {
  let component: DfaAlertComponent;
  let fixture: ComponentFixture<DfaAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfaAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
