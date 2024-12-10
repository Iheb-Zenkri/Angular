import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { RestrictAuthGuard } from './restrict-auth.guard';

describe('restrictAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => RestrictAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
