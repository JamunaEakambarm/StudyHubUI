import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlAdvancePerformanceOptimizationComponent } from './sql-advance-performance-optimization.component';

describe('SqlAdvancePerformanceOptimizationComponent', () => {
  let component: SqlAdvancePerformanceOptimizationComponent;
  let fixture: ComponentFixture<SqlAdvancePerformanceOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlAdvancePerformanceOptimizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlAdvancePerformanceOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
