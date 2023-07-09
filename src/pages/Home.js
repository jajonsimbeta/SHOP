
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Detail from "./detail";
function Home(probs){
    let [count,setCount] = useState(2);
    return(
        <div className="container mx-auto">
            <div className="w-full aspect-video bg-center bg-contain bg-no-repeat bg-[url('./img/bg.jpg')] px-6 py-5 font-extrabold text-gray-300 text-2xl flex-wrap" >
                <h2>Shoes Shop</h2>
            </div>
            <div className="flex justify-center text-center px-4 pb-16">
                {
                    probs.shoes.map((a,i)=>{ 
                        return(
                        <Card shoes={probs.shoes[i]} id={i+1} key={i} />
                        )
                    })
                }
            </div>
            <button onClick={()=>{  
                axios.get(`https://codingapple1.github.io/shop/data${count}.json`).then((res)=>{
                    let copy =[...probs.shoes,...res.data];
                    console.log(copy)
                    probs.setShoes(copy);
                }).catch(()=>{
                    alert('에러');
                });
                setCount(count+1);
                console.log(count);
            }} className="bg-red-600 text-white py-5 block w-40 mx-auto">버튼</button>
        </div>
    );
}


function Card(probs) {
    return (
        <div className="border-solid border-gray-300 last:mr-0  mr-2 border rounded-md hover:border-gray-500 cursor-pointer transition-all duration-300 linear py-4 w-1/3">
            <Link to={"/Detail/"+probs.shoes.id}>
                <img src={'https://codingapple1.github.io/shop/shoes'+probs.id+'.jpg'} width="80%" className="mx-auto" />
                <h4 className="text-base text-rose-600">{probs.shoes.title}</h4>
                <p className="text-sm text-gray-500">{probs.shoes.price}</p>
            </Link>
        </div>
    );
}

export default Home;