import React, { useState } from "react";

const CustomerOrders = () => {
    const [pendingOrders, setPendingOrders] = useState([
        { id: "ORD-001", customer: "John Doe", medicine: "Paracetamol", quantity: 2 },
        { id: "ORD-002", customer: "Jane Smith", medicine: "Amoxicillin", quantity: 1 },
    ]);

    const [approvedOrders, setApprovedOrders] = useState([]);
    const [rejectedOrders, setRejectedOrders] = useState([]);

    const handleApprove = (orderId) => {
        const order = pendingOrders.find((o) => o.id === orderId);
        setApprovedOrders([...approvedOrders, order]);
        setPendingOrders(pendingOrders.filter((o) => o.id !== orderId));
    };

    const handleReject = (orderId) => {
        const order = pendingOrders.find((o) => o.id === orderId);
        setRejectedOrders([...rejectedOrders, order]);
        setPendingOrders(pendingOrders.filter((o) => o.id !== orderId));
    };

    return (
        <div className="bg-white shadow-md rounded-md p-6 mt-6">
        <h2 className="text-xl font-bold mb-6">Customer Orders</h2>

        {/* Pending Approval Table */}
        <div className="mb-10">
            <h3 className="font-semibold mb-2">Pending Approval</h3>
            <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead className="bg-gray-50">
                <tr>
                    <th className="p-3 border border-gray-200">Order ID</th>
                    <th className="p-3 border border-gray-200">Customer Name</th>
                    <th className="p-3 border border-gray-200">Medicine</th>
                    <th className="p-3 border border-gray-200">Quantity</th>
                    <th className="p-3 border border-gray-200">Status</th>
                    <th className="p-3 border border-gray-200">Actions</th>
                </tr>
                </thead>
                <tbody>
                {pendingOrders.length === 0 ? (
                    <tr>
                    <td colSpan="6" className="p-3 text-center text-gray-500">
                        No orders found
                    </td>
                    </tr>
                ) : (
                    pendingOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                        <td className="p-3 border border-gray-200 text-center">{order.id}</td>
                        <td className="p-3 border border-gray-200 text-center">{order.customer}</td>
                        <td className="p-3 border border-gray-200 text-center">{order.medicine}</td>
                        <td className="p-3 border border-gray-200 text-center">{order.quantity}</td>
                            <td className="p-3 border border-gray-200 ">
                                <div className="flex items-center justify-center">
                                    <span className="px-3 py-1 text-xs rounded-full text-center text-white bg-yellow-500">
                                        Pending Approval
                                    </span>
                                </div>
                            </td>
                        <td className="p-3 border border-gray-200 ">
                            <div className="flex items-center justify-center space-x-2 ">
                                <button
                                onClick={() => handleApprove(order.id)}
                                className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleReject(order.id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                                >
                                    Reject
                                </button>
                            </div>
                        </td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
            </div>
        </div>

        {/* Approved Orders Table */}
        <div className="mb-10">
            <h3 className="font-semibold mb-2">Approved</h3>
            <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead className="bg-gray-50">
                <tr>
                    <th className="p-3 border border-gray-200">Order ID</th>
                    <th className="p-3 border border-gray-200">Customer Name</th>
                    <th className="p-3 border border-gray-200">Medicine</th>
                    <th className="p-3 border border-gray-200">Quantity</th>
                    <th className="p-3 border border-gray-200">Status</th>
                </tr>
                </thead>
                <tbody>
                {approvedOrders.length === 0 ? (
                    <tr>
                    <td colSpan="5" className="p-3 text-center text-gray-500">
                        No approved orders
                    </td>
                    </tr>
                ) : (
                    approvedOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                        <td className="p-3 border border-gray-200">{order.id}</td>
                        <td className="p-3 border border-gray-200">{order.customer}</td>
                        <td className="p-3 border border-gray-200">{order.medicine}</td>
                        <td className="p-3 border border-gray-200">{order.quantity}</td>
                        <td className="p-3 border border-gray-200">
                        <span className="px-3 py-1 text-xs rounded-full text-white bg-green-500">
                            Approved
                        </span>
                        </td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
            </div>
        </div>

        {/* Rejected Orders Table */}
        <div>
            <h3 className="font-semibold mb-2">Rejected</h3>
            <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead className="bg-gray-50">
                <tr>
                    <th className="p-3 border border-gray-200">Order ID</th>
                    <th className="p-3 border border-gray-200">Customer Name</th>
                    <th className="p-3 border border-gray-200">Medicine</th>
                    <th className="p-3 border border-gray-200">Quantity</th>
                    <th className="p-3 border border-gray-200">Status</th>
                </tr>
                </thead>
                <tbody>
                {rejectedOrders.length === 0 ? (
                    <tr>
                    <td colSpan="5" className="p-3 text-center text-gray-500">
                        No rejected orders
                    </td>
                    </tr>
                ) : (
                    rejectedOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                        <td className="p-3 border border-gray-200">{order.id}</td>
                        <td className="p-3 border border-gray-200">{order.customer}</td>
                        <td className="p-3 border border-gray-200">{order.medicine}</td>
                        <td className="p-3 border border-gray-200">{order.quantity}</td>
                        <td className="p-3 border border-gray-200">
                        <span className="px-3 py-1 text-xs rounded-full text-white bg-red-500">
                            Rejected
                        </span>
                        </td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
};

export default CustomerOrders;
