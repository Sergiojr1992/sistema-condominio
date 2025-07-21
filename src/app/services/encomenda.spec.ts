import { Encomenda } from '../../models/encomenda';

describe('Encomenda', () => {
  let encomenda: Encomenda;

  beforeEach(() => {
    encomenda = new Encomenda();
  });

  it('should be created', () => {
    expect(encomenda).toBeTruthy();
  });
});
