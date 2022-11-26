import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTableVariableComponent } from './update-table-variable.component';

describe('UpdateTableVariableComponent', () => {
  let component: UpdateTableVariableComponent;
  let fixture: ComponentFixture<UpdateTableVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTableVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTableVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
