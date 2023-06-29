import './App.css';
import { useState } from 'react';

function App() {
  let [shoes, setstate] = useState('');
  return (
    <div className="App font-NotoSansKR">
      <header className="bg-gray-950 text-gray-300 drop-shadow-md">
        <nav className="flex px-5 py-3  justify-between items-center">
          <h1 className="font-medium text-3xl bg-slate-800 rounded-lg px-3">Shop</h1>
          <nav>
            <ul className='flex'>
              <li className='px-2'><a href="#">HOME</a></li>
              <li className='px-2'><a href="#">Features</a></li>
              <li className='px-2'><a href="#">Pricing</a></li>
            </ul>
          </nav>
        </nav>
      </header>

      <div className="w-full aspect-video bg-center bg-contain bg-no-repeat bg-[url('./img/bg.jpg')]">

      </div>

      <div className="container">

      </div>
      <div className="container flex justify-between text-justify">
        <div className="w-1/3 border-solid border-gray-300  mr-10 border rounded-md hover:border-gray-500 cursor-pointer">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" className="mx-auto" />
            <h4>상품명</h4>
            <p>상품정보</p>
        </div>
        <div className="w-1/3 border-solid border-gray-300  mr-10 border rounded-md hover:border-gray-500 cursor-pointer overflow-hidden">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" className="mx-auto"/>
            <h4>상품명</h4>
            <p>상품정보</p>
        </div>
        <div className="w-1/3">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" className="mx-auto"/>
            <h4>상품명</h4>
            <p>상품정보</p>
        </div>
      </div>
    </div>
  );
}


export default App;
