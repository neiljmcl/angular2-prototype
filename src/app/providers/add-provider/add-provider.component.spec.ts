/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddProviderComponent } from './add-provider.component';

describe('AddProviderComponent', () => {
  let component: AddProviderComponent;
  let fixture: ComponentFixture<AddProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
