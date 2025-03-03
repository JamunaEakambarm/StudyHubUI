import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlAdvanceComponent } from './sql-advance.component';

describe('SqlAdvanceComponent', () => {
  let component: SqlAdvanceComponent;
  let fixture: ComponentFixture<SqlAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlAdvanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
