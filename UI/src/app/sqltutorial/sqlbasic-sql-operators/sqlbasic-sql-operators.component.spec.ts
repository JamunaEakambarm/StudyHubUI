import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlOperatorsComponent } from './sqlbasic-sql-operators.component';

describe('SqlbasicSqlOperatorsComponent', () => {
  let component: SqlbasicSqlOperatorsComponent;
  let fixture: ComponentFixture<SqlbasicSqlOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
