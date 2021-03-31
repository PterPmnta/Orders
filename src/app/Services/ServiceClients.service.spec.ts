/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceClientsService } from './ServiceClients.service';

describe('Service: ServiceClients', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceClientsService]
    });
  });

  it('should ...', inject([ServiceClientsService], (service: ServiceClientsService) => {
    expect(service).toBeTruthy();
  }));
});
