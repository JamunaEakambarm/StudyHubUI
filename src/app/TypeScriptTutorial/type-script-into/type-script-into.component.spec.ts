import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScriptIntoComponent } from './type-script-into.component';

describe('TypeScriptIntoComponent', () => {
  let component: TypeScriptIntoComponent;
  let fixture: ComponentFixture<TypeScriptIntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeScriptIntoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeScriptIntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
