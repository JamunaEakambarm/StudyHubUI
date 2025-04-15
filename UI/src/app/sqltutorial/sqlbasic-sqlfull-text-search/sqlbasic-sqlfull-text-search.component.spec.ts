import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqlfullTextSearchComponent } from './sqlbasic-sqlfull-text-search.component';

describe('SqlbasicSqlfullTextSearchComponent', () => {
  let component: SqlbasicSqlfullTextSearchComponent;
  let fixture: ComponentFixture<SqlbasicSqlfullTextSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqlfullTextSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqlfullTextSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
