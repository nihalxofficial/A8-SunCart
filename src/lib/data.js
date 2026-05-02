export const getProducts = async()=>{
    const res = await fetch("https://suncart-server.onrender.com/products");
    const products = await res.json();
    return products;
}

export const getCategories = async()=>{
    const res = await fetch("https://suncart-server.onrender.com/category");
    const categories = await res.json();
    return categories;
}

