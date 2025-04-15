import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbasicSqltriggersComponent } from './sqlbasic-sqltriggers.component';

describe('SqlbasicSqltriggersComponent', () => {
  let component: SqlbasicSqltriggersComponent;
  let fixture: ComponentFixture<SqlbasicSqltriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlbasicSqltriggersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlbasicSqltriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
