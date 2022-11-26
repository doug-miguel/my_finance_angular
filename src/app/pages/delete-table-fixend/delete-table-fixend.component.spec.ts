import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTableFixendComponent } from './delete-table-fixend.component';

describe('DeleteTableFixendComponent', () => {
  let component: DeleteTableFixendComponent;
  let fixture: ComponentFixture<DeleteTableFixendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTableFixendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTableFixendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
