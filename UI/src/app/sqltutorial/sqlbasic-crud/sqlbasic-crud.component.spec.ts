import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicCrudComponent } from './sqlbasic-crud.component';

describe('SqlbasicCrudComponent', () => {
  let component: SqlbasicCrudComponent;
  let fixture: ComponentFixture<SqlbasicCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
