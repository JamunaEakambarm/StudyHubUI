import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlindexesComponent } from './sqlbasic-sqlindexes.component';

describe('SqlbasicSqlindexesComponent', () => {
  let component: SqlbasicSqlindexesComponent;
  let fixture: ComponentFixture<SqlbasicSqlindexesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlindexesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlindexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
