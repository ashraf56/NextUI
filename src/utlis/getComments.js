
const getComments = async () => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/comments')

        if (!res.ok) {
            throw new Error("data load failed")
        }
        return res.json()
    } catch (error) {
        console.log(error);
    }
};

export default getComments;