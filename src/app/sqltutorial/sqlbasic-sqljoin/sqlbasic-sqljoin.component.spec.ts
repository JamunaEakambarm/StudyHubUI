import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqljoinComponent } from './sqlbasic-sqljoin.component';

describe('SqlbasicSqljoinComponent', () => {
  let component: SqlbasicSqljoinComponent;
  let fixture: ComponentFixture<SqlbasicSqljoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqljoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqljoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
