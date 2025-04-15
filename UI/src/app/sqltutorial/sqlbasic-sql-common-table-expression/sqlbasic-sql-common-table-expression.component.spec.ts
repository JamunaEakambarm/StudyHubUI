import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlCommonTableExpressionComponent } from './sqlbasic-sql-common-table-expression.component';

describe('SqlbasicSqlCommonTableExpressionComponent', () => {
  let component: SqlbasicSqlCommonTableExpressionComponent;
  let fixture: ComponentFixture<SqlbasicSqlCommonTableExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlCommonTableExpressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlCommonTableExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
