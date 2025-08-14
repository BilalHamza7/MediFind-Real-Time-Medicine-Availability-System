import React from "react";

const AddMedicine = () => {
    return (
        <div className="bg-white shadow-md rounded-md p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Add New Medicine</h2>
            <div>
            <button className="px-4 py-2 border rounded-md mr-3 hover:bg-blue-500 hover:text-white">
                Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:border-1 hover:border-[#0046FF]  hover:text-black hover:bg-white">
                Save Medicine
            </button>
            </div>
        </div>

        {/* Basic Information */}
        <section className="mb-6">
            <h3 className="font-semibold mb-2">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="eg: Paracetamol" className="border rounded-md p-2" />
            <input placeholder="Brand Name" className="border rounded-md p-2" />
            <select className="border rounded-md p-2">
                <option>Select a category</option>
            </select>
            <select className="border rounded-md p-2">
                <option>Select Type (Tablet, Syrup, etc)</option>
            </select>
            </div>
        </section>

        {/* Stock & Pricing */}
        <section className="mb-6">
            <h3 className="font-semibold mb-2">Stock & Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Quantity in Stock" className="border rounded-md p-2" />
            <div className="flex">
                <span className="border rounded-l-md p-2 bg-gray-100">LKR</span>
                <input placeholder="0.00" className="border rounded-r-md p-2 flex-1" />
            </div>
            <input type="date" className="border rounded-md p-2" />
            <div className="flex">
                <span className="border rounded-l-md p-2 bg-gray-100">mg</span>
                <input placeholder="400" className="border rounded-r-md p-2 flex-1" />
            </div>
            </div>
        </section>

        {/* Regulatory & Availability */}
        <section className="mb-6">
            <h3 className="font-semibold mb-2">Regulatory & Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex items-center space-x-2">
                <label className="font-medium">Prescription Required</label>
                <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <select className="border rounded-md p-2">
                <option>In Stock</option>
                <option>Out of Stock</option>
            </select>
            </div>
        </section>

        {/* Description & Media */}
        <section>
            <h3 className="font-semibold mb-2">Description & Media</h3>
            <textarea
            placeholder="eg: Used to treat fever and mild pain"
            className="border rounded-md p-2 w-full mb-4"
            ></textarea>
            <div className="flex items-center space-x-4">
            <div className="w-40 h-24 border rounded-md bg-gray-50 flex items-center justify-center relative">
                <input
                id="fileUpload"
                type="file"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                />
                <label
                htmlFor="fileUpload"
                className="text-xs text-gray-500 cursor-pointer text-center"
                >
                No file chosen
                </label>
            </div>
            <button className="px-4 py-2 border rounded-md">Remove</button>
            </div>
        </section>
        </div>
    );
    };

export default AddMedicine;
