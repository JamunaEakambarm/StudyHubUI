import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlsubqueryComponent } from './sqlbasic-sqlsubquery.component';

describe('SqlbasicSqlsubqueryComponent', () => {
  let component: SqlbasicSqlsubqueryComponent;
  let fixture: ComponentFixture<SqlbasicSqlsubqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlsubqueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlsubqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
