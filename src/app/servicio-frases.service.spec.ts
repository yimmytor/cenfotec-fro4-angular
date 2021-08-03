import { TestBed } from '@angular/core/testing';

import { ServicioFrasesService } from './servicio-frases.service';

describe('ServicioFrasesService', () => {
  let service: ServicioFrasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFrasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
