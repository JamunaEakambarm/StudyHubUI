import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlNormalizationComponent } from './sqlbasic-sql-normalization.component';

describe('SqlbasicSqlNormalizationComponent', () => {
  let component: SqlbasicSqlNormalizationComponent;
  let fixture: ComponentFixture<SqlbasicSqlNormalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlNormalizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlNormalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
