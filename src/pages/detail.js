import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function Detail(probs){
    let {id} = useParams();
    let imgId = Number(id)+1 ;
    let outPutId = probs.shoes.find((arr)=>arr.id == id);
    let [isCnt,setIsCnt] = useState(true);
    let [value,setValue] = useState(0);
    useEffect(()=>{
        // setTimeout(()=>{setIsCnt(false)},2000);
    },[]);
    
    return(
        <div className="container mx-auto py-10">
            {/* { 

                isCnt ? (<div className="text-center font-semibold text-lg">2초 이내 구매시 할인</div> ) : null
            } */}
            <div>
                <input type="text" value={value} onChange={
                    (e)=>{
                        setValue(e.target.value)
                    }
                }/>
            </div>
            <div className="md:flex justify-between">
                <div className="aspect-auto">
                    <img src={'https://codingapple1.github.io/shop/shoes'+imgId+'.jpg'}  className="mx-auto" width="100%"/>
                </div>
                <div className="px-8 w-1/2">
                    <div className="font-semibold text-3xl text-sky-950">{outPutId.title}</div>
                    <div className="font-semibold  text-sky-950">{outPutId.content}</div>
                    <div>{outPutId.price}</div>
                </div>
            </div>
        </div>
    );
}


export default Detail;
