import { TestBed } from '@angular/core/testing';

import { DatosMoviesService } from './datos-movies.service';

describe('DatosMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosMoviesService = TestBed.get(DatosMoviesService);
    expect(service).toBeTruthy();
  });
});
