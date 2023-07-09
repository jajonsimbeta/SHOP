import './App.css';
import data from './data';
import Detail from './pages/detail'
import Home from './pages/Home'
import Event from './pages/Event'
import { useState } from 'react';
import { Route, Link ,Routes, Outlet } from 'react-router-dom';
function App() {
  let [shoes,setShoes] = useState(data);
  return (
    <div className="App font-NotoSansKR">
      <header className="bg-gray-950 text-gray-300 drop-shadow-md">
        <nav className="flex px-5 py-3  justify-between items-center">
          <h1 className="font-medium text-1xl bg-slate-800 rounded-lg py-2 px-5 text-rose-500">Shoes Shop</h1>
          <nav>
            <ul className="flex text-base">
              <li className='px-2 py-2'><Link to="/">Home</Link></li>
              <li className='px-2 py-2'><Link to="/Detail">Detail</Link></li>
              <li className='px-2 py-2'><Link to="/Event">Event</Link></li>
            </ul>
          </nav>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} id={shoes.id+1}/>} />
        <Route path="/Detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="/Event" element={<Event />} >
          <Route path="1" element={<p>첫 주무시 양배추즙 서비스 <Outlet></Outlet></p>}>
            <Route path="a" element={<p>a</p>}></Route>
          </Route>
          <Route path="2" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<div>페이지가 없어요</div>} />
      </Routes>
    </div>
  );
}



export default App;
