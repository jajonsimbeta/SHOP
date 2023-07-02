import React from 'react'
import { Outlet } from "react-router-dom";

function Event() {
    return (
        <div className="text-center p-20">
            <h3 className="text-3xl font-semibold">오늘의 이벤트</h3>
            <Outlet></Outlet>
        </div>
    )
}

export default Event