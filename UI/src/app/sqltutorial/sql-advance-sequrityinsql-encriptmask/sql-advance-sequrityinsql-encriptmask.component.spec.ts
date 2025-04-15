import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlAdvanceSequrityinsqlEncriptmaskComponent } from './sql-advance-sequrityinsql-encriptmask.component';

describe('SqlAdvanceSequrityinsqlEncriptmaskComponent', () => {
  let component: SqlAdvanceSequrityinsqlEncriptmaskComponent;
  let fixture: ComponentFixture<SqlAdvanceSequrityinsqlEncriptmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlAdvanceSequrityinsqlEncriptmaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlAdvanceSequrityinsqlEncriptmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
