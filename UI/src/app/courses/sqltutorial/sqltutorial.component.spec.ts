import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SQLTutorialComponent } from './sqltutorial.component';

describe('SQLTutorialComponent', () => {
  let component: SQLTutorialComponent;
  let fixture: ComponentFixture<SQLTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SQLTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SQLTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
