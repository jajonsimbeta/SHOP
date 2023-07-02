
import { useState } from 'react';

function Home(probs){
    
    return(
        <div className="container mx-auto">
            <div className="w-full aspect-video bg-center bg-contain bg-no-repeat bg-[url('./img/bg.jpg')] px-6 py-5 font-extrabold text-gray-300 text-2xl" >
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
        </div>
    );
}


function Card(probs) {
    
    return (
        <div className="border-solid border-gray-300 last:mr-0  mr-2 border rounded-md hover:border-gray-500 cursor-pointer transition-all duration-300 linear py-4 ">
            <img src={'https://codingapple1.github.io/shop/shoes'+probs.shoes.id+'.jpg'} width="80%" className="mx-auto" />
            <h4 className="text-base text-rose-600">{probs.shoes.title}</h4>
            <p className="text-sm text-gray-500">{probs.shoes.price}</p>
        </div>
    );
}

export default Home;