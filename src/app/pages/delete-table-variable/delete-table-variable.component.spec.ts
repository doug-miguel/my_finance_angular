import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTableVariableComponent } from './delete-table-variable.component';

describe('DeleteTableVariableComponent', () => {
  let component: DeleteTableVariableComponent;
  let fixture: ComponentFixture<DeleteTableVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTableVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTableVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
