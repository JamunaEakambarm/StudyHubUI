import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTutorialComponent } from './javascript-tutorial.component';

describe('JavascriptTutorialComponent', () => {
  let component: JavascriptTutorialComponent;
  let fixture: ComponentFixture<JavascriptTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
