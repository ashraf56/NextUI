
const getSingleProducts = async(id) => {
    try {
    
        let res = await fetch(`https://dummyjson.com/products/${id}`, {
            cache:'no-cache'
        })
        
        if (!res.ok) {
            throw new Error("data load failed")  
        }
        return res.json()
         } catch (error) {
            console.log(error);
         }
};

export default getSingleProducts;