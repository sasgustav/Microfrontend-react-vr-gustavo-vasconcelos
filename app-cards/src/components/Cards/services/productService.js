import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fetchProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        toast.error('Falha ao buscar os produtos. A API de teste não esta respondendo.', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return [];
    }
};
