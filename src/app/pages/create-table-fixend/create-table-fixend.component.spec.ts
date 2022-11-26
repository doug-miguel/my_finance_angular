import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTableFixendComponent } from './create-table-fixend.component';

describe('CreateTableFixendComponent', () => {
  let component: CreateTableFixendComponent;
  let fixture: ComponentFixture<CreateTableFixendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTableFixendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTableFixendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
