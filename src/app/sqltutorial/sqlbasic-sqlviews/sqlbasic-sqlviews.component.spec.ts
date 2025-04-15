import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlviewsComponent } from './sqlbasic-sqlviews.component';

describe('SqlbasicSqlviewsComponent', () => {
  let component: SqlbasicSqlviewsComponent;
  let fixture: ComponentFixture<SqlbasicSqlviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
