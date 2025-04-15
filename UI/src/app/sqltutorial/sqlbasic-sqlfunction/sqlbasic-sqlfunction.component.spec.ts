import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlfunctionComponent } from './sqlbasic-sqlfunction.component';

describe('SqlbasicSqlfunctionComponent', () => {
  let component: SqlbasicSqlfunctionComponent;
  let fixture: ComponentFixture<SqlbasicSqlfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlfunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
