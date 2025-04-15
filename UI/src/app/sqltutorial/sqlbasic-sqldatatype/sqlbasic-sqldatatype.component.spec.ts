import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqldatatypeComponent } from './sqlbasic-sqldatatype.component';

describe('SqlbasicSqldatatypeComponent', () => {
  let component: SqlbasicSqldatatypeComponent;
  let fixture: ComponentFixture<SqlbasicSqldatatypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqldatatypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqldatatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
