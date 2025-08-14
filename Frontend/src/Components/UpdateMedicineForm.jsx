import React from "react";

const UpdateMedicineForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // hide form when not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            {/* Close button */}
            <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
            ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Update Medicine</h2>

            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                Medicine Name
                </label>
                <input
                type="text"
                placeholder="Enter medicine name"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Brand
                </label>
                <input
                    type="text"
                    placeholder="Enter brand name"
                    className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Category
                </label>
                <input
                    type="text"
                    placeholder="Enter category"
                    className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Price Per Unit
                </label>
                <input
                    type="number"
                    placeholder="0.00"
                    className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Quantity In Stock
                </label>
                <input
                    type="number"
                    placeholder="Enter quantity"
                    className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                Expiry Date
                </label>
                <input
                type="date"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
                <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-md text-sm text-gray-600 hover:bg-gray-100"
                >
                Cancel
                </button>
                <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
                >
                Save Changes
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateMedicineForm;
