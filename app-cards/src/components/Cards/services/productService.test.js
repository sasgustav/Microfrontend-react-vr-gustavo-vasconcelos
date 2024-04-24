import { fetchProducts } from './productService';

global.fetch = jest.fn();

describe('fetchProducts', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('deve retornar produtos quando a chamada à API for bem-sucedida', async () => {
    const mockProducts = [
      { id: 1, name: 'Produto 1' },
      { id: 2, name: 'Produto 2' }
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ products: mockProducts })
    });

    const products = await fetchProducts();
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    expect(products).toEqual(mockProducts);
  });

  it('deve retornar uma lista vazia quando a chamada à API falhar', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: 'Not found' })
    });

    const products = await fetchProducts();
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    expect(products).toEqual([]);
  });

  it('deve retornar uma lista vazia e logar um erro quando a chamada à API resultar em exceção', async () => {
    fetch.mockRejectedValue(new Error('Failed to fetch'));

    console.error = jest.fn();

    const products = await fetchProducts();
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    expect(console.error).toHaveBeenCalledWith('Fetching products failed:', new Error('Failed to fetch'));
    expect(products).toEqual([]);
  });
});
