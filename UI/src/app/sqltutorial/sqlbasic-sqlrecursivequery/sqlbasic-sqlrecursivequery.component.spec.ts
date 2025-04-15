import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlrecursivequeryComponent } from './sqlbasic-sqlrecursivequery.component';

describe('SqlbasicSqlrecursivequeryComponent', () => {
  let component: SqlbasicSqlrecursivequeryComponent;
  let fixture: ComponentFixture<SqlbasicSqlrecursivequeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlrecursivequeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlrecursivequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
