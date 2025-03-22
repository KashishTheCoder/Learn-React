import {useState, useEffect} from 'react'

function FetchAPI(){
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(1);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${count}`).then(res => res.json()).then(p => setProduct(p))
    },[count])
   

    return (
        <>
                <div>
                    <h1>{product.title}</h1>
                    <img src={product.image} alt={product.title} width='400px' />
                </div>
                <button onClick={()=> setCount(count => count-1)}>Previous</button>
                <button onClick={()=> setCount(count => count+1)}>Next</button>
        </>
    );
}

export default FetchAPI;