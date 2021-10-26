import { TestBed } from '@angular/core/testing';

import { ServerShopService } from './server-shop.service';

describe('ServerShopService', () => {
  let service: ServerShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
