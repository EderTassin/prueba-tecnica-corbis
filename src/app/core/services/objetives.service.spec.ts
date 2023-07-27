/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObjetivesService } from './objetives.service';

describe('Service: Objetives', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjetivesService]
    });
  });

  it('should ...', inject([ObjetivesService], (service: ObjetivesService) => {
    expect(service).toBeTruthy();
  }));
});
