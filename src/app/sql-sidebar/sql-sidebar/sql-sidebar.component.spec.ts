import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlSidebarComponent } from './sql-sidebar.component';

describe('SqlSidebarComponent', () => {
  let component: SqlSidebarComponent;
  let fixture: ComponentFixture<SqlSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
