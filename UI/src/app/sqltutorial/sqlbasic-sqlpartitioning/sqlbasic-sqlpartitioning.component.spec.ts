import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlpartitioningComponent } from './sqlbasic-sqlpartitioning.component';

describe('SqlbasicSqlpartitioningComponent', () => {
  let component: SqlbasicSqlpartitioningComponent;
  let fixture: ComponentFixture<SqlbasicSqlpartitioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlpartitioningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlpartitioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
