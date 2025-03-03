import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqltransactionsComponent } from './sqlbasic-sqltransactions.component';

describe('SqlbasicSqltransactionsComponent', () => {
  let component: SqlbasicSqltransactionsComponent;
  let fixture: ComponentFixture<SqlbasicSqltransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqltransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqltransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
