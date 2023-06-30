import './App.css';
import { useState } from 'react';
import data from './data'
function App() {
  let [shoes, setstate] = useState(data);
  
  return (
    <div className="App font-NotoSansKR">
      <header className="bg-gray-950 text-gray-300 drop-shadow-md">
        <nav className="flex px-5 py-3  justify-between items-center">
          <h1 className="font-medium text-1xl bg-slate-800 rounded-lg px-3">Shop</h1>
          <nav>
            <ul className="flex text-xs">
              <li className='px-2 py-2'><a href="#">HOME</a></li>
              <li className='px-2 py-2'><a href="#">Features</a></li>
              <li className='px-2 py-2'><a href="#">Pricing</a></li>
            </ul>
          </nav>
        </nav>
      </header>

      <div className="w-full aspect-video bg-center bg-contain bg-no-repeat bg-[url('./img/bg.jpg')] px-6 py-5 font-extrabold text-gray-300 text-2xl" >
        <h2>Shoes Shop</h2>
      </div>

      <div className="container flex justify-between text-center px-4">
        {
          shoes.map((a,i)=>{ 
            return(
              <Card shoes={shoes[i]} id={i+1} key={i} />
            )
          })
        
        } 
      </div>
    </div>
  );
}




function Card(props) {
  return (
    <div className="border-solid border-gray-300 last:mr-0  mr-2 border rounded-md hover:border-gray-500 cursor-pointer transition-all duration-300 linear py-4 ">
        <img src={'https://codingapple1.github.io/shop/shoes'+props.id+'.jpg'} width="80%" className="mx-auto" />
        <h4 className="text-base text-blue-950">{props.shoes.title}</h4>
        <p class="text-sm text-gray-500">{props.shoes.price}</p>
    </div>
  );
}



export default App;
