import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqljsonComponent } from './sqlbasic-sqljson.component';

describe('SqlbasicSqljsonComponent', () => {
  let component: SqlbasicSqljsonComponent;
  let fixture: ComponentFixture<SqlbasicSqljsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqljsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqljsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
