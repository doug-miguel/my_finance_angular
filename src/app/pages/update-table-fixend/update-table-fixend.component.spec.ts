import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTableFixendComponent } from './update-table-fixend.component';

describe('UpdateTableFixendComponent', () => {
  let component: UpdateTableFixendComponent;
  let fixture: ComponentFixture<UpdateTableFixendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTableFixendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTableFixendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
