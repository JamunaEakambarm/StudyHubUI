import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlBasicComponent } from './sql-basic.component';

describe('SqlBasicComponent', () => {
  let component: SqlBasicComponent;
  let fixture: ComponentFixture<SqlBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
