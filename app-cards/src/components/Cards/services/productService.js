export const fetchProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Falha ao buscar produtos:', error);
        return [];
    }
};
