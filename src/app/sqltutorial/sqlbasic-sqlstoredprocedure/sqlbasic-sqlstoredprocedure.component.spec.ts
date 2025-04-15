import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlstoredprocedureComponent } from './sqlbasic-sqlstoredprocedure.component';

describe('SqlbasicSqlstoredprocedureComponent', () => {
  let component: SqlbasicSqlstoredprocedureComponent;
  let fixture: ComponentFixture<SqlbasicSqlstoredprocedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlstoredprocedureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlstoredprocedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
