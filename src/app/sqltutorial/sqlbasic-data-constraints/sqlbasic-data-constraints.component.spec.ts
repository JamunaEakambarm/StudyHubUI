import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicDataConstraintsComponent } from './sqlbasic-data-constraints.component';

describe('SqlbasicDataConstraintsComponent', () => {
  let component: SqlbasicDataConstraintsComponent;
  let fixture: ComponentFixture<SqlbasicDataConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicDataConstraintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicDataConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
