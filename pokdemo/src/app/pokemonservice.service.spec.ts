import { TestBed } from '@angular/core/testing';

import { PokemonserviceService } from './pokemonservice.service';

describe('PokemonserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonserviceService = TestBed.get(PokemonserviceService);
    expect(service).toBeTruthy();
  });
});
