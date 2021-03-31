/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { S_OrdersService } from './S_Orders.service';

describe('Service: S_Orders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S_OrdersService]
    });
  });

  it('should ...', inject([S_OrdersService], (service: S_OrdersService) => {
    expect(service).toBeTruthy();
  }));
});
