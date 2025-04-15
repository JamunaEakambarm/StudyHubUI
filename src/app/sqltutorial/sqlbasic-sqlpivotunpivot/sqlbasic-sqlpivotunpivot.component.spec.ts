import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlpivotunpivotComponent } from './sqlbasic-sqlpivotunpivot.component';

describe('SqlbasicSqlpivotunpivotComponent', () => {
  let component: SqlbasicSqlpivotunpivotComponent;
  let fixture: ComponentFixture<SqlbasicSqlpivotunpivotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlpivotunpivotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlpivotunpivotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
