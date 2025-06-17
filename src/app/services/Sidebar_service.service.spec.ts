import { TestBed } from '@angular/core/testing';



describe('Sidebar_service', () => {
  let service: Sidebar_service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sidebar_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
