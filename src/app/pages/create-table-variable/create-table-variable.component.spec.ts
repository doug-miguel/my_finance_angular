import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTableVariableComponent } from './create-table-variable.component';

describe('CreateTableVariableComponent', () => {
  let component: CreateTableVariableComponent;
  let fixture: ComponentFixture<CreateTableVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTableVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTableVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
