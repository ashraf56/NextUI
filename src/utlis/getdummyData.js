

const getdummyData = async() => {
    try {
    
        let res = await fetch('https://dummyjson.com/products', {
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

export default getdummyData;