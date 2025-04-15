import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTutorialComponent } from './home-tutorial.component';

describe('HomeTutorialComponent', () => {
  let component: HomeTutorialComponent;
  let fixture: ComponentFixture<HomeTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
