import { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (

    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Modal Component Demo
        </h1>

        {/* Button to open modal */}
        <button
          onClick={openModal}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
        >
          Open Modal
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={closeModal}
            />

            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 transform transition-all">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >

              </button>

              {/* Modal header */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Modal Title
                </h2>
              </div>

              {/* Modal body */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  This is a modal dialog. You can close it by clicking the X button above,
                  clicking the "Close" button below, or clicking outside the modal on the backdrop.
                </p>
              </div>

              {/* Modal footer */}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



export default App;
