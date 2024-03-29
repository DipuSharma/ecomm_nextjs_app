import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import AdminHeader from "@/components/AdminComponents/Header.jsx";
import { data } from '../../data/data.js';
const Orders = () => {
    const page_data = "ORDER"
    return (
        <div className="bg-gray-100 min-h-screen">
            <AdminHeader page_data={page_data} />
            {/* Admin Orders Page Body Start  */}
            <div className="p-4">
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-hidden">
                    <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Order</span>
                        <span className="sm:text-left text-right">Status</span>
                        <span className="hidden md:grid">Last Order</span>
                        <span className="hidden sm:grid">Method</span>
                    </div>
                    <ul>
                        {data.map((order, id) => (
                            <li key={id} className="bg-gray-50 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                <div className="flex">
                                    <div className="bg-purple-200 p-3 rounded-lg">
                                        <FaShoppingBag className="text-purple-900"/>
                                    </div>
                                    <div className="pl-4">
                                        <p className="text-gray-800 font-bold"><span content="\20B9">&#8377;</span>{order.total.toLocaleString()}</p>
                                        <p className="text-gray-800 text-sm">{order.name.first}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 sm:text-left text-right"><span 
                                className={order.status == 'Processing' ? 'bg-green-300 p-2 rounded-lg': order.status == 'Completed' ? 'bg-blue-300 p-2 rounded-lg': 'bg-yellow-300 p-2 rounded-lg'}
                                >{order.status}</span></p>
                                <p className="hidden md:flex">{order.date}</p>
                                <div className="sm:flex hidden justify-between items-center">
                                    <p>{order.method}</p>
                                    <BsThreeDotsVertical/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Admin Orders Page Body End  */}
        </div>
    )
}

export default Orders;