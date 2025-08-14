import React, { useState } from "react";
import AddMedicine from "../Components/AddMedicine";
import ManageInventory from "../Components/ManageInventory";
import CustomerOrders from "../Components/CustomerOrders";

const PharmacyHome = () => {
    const [tab, setTab] = useState("");

    return (
        <div className="mt-8 min-h-screen w-3/4 bg-blue-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center space-x-2">
                <h1 className="text-lg font-semibold">
                    Welcome <span className="font-bold">Pharmacist Name</span>,
                </h1>
                </div>

                {/* Navigation Tabs */}
                <div className="flex space-x-2 mt-4">
                <button
                    className="px-4 py-2 bg-white border-b-2 border-[#0046FF] rounded-md shadow-sm font-medium"
                    onClick={() => setTab("newMedicine")}
                >
                    New Medicine
                </button>
                <button
                    className="px-4 py-2 bg-white border-b-2 border-[#F97A00] rounded-md shadow-sm font-medium"
                    onClick={() => setTab("manageInventory")}
                >
                    Manage Inventory
                </button>
                <button
                    className="px-4 py-2 bg-white border-b-2 border-[#78C841] rounded-md shadow-sm font-medium"
                    onClick={() => setTab("customerOrders")}
                >
                    Customer Orders
                </button>
                </div>

                {/* New Medicine */}
                {tab === "newMedicine" && 
                    <AddMedicine />
                }
                {tab === "manageInventory" && 
                    <ManageInventory />
                }
                {tab === "customerOrders" && 
                    <CustomerOrders />
                }
            </div>
        </div>
    );
}

export default PharmacyHome;
