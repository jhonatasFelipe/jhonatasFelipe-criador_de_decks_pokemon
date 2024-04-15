import { TestBed } from '@angular/core/testing';

import { ApiKeyInterceptorInterceptor } from './api-key-interceptor.interceptor';

describe('ApiKeyInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiKeyInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiKeyInterceptorInterceptor = TestBed.inject(ApiKeyInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
