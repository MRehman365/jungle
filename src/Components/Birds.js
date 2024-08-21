
import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { Tilt } from "react-tilt"; // Import Tilt component
import an1 from "../Assets/istockphoto-157375891-612x612.jpg";
import an2 from "../Assets/peacock.jpg";
import an3 from "../Assets/jungle-myna-bird-finds-money-steal-smart.jpg";
import an4 from "../Assets/bald-eagle-is-standing-branch-woods_741910-3223.avif";
import an5 from "../Assets/1200.jpg";
import an6 from "../Assets/dhrmy63-8ae5ffe3-68e8-4c20-b928-7dff6426f334.png";

const Birds = () => {
  
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product

  const products = [
    {
      id: 1,
      title: "Macaws",
      imageSrc: an1,
      price: "8000",
      discount: "-20%",
    },
    {
      id: 2,
      title: "Peacock",
      imageSrc: an2,
      price: "12000",
      discount: "-32%",
    },
    {
      id: 3,
      title: "Jungle Myna",
      imageSrc: an3,
      price: "3000",
      discount: "-27%",
    },
    {
      id: 4,
      title: "Eagle",
      imageSrc: an4,
      price: "15000",
      discount: "-49%",
    },
    {
      id: 5,
      title: "Owlet",
      imageSrc: an5,
      price: "5000",
      discount: "-58%",
    },
    {
      id: 6,
      title: "Penguin",
      imageSrc: an6,
      price: "2000",
      discount: "-35%",
    },
  ];
  const handleIconClick = (product) => {
    setSelectedProduct(product); // Set the selected product
  };

  const closeInfo = () => {
    setSelectedProduct(null); // Close the information modal
  };

  return (
    <div>
      <div className="bg-gray-900 p-4">
        <h2 className="text-white text-2xl mb-4">Popular Birds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Tilt
              key={product.id}
              className="Tilt"
              options={{ max: 10, speed: 300, scale: 1.02 }}
            >
              <div className="bg-gray-800 p-2 rounded-lg transform transition-all relative">
                <div className="relative">
                  <img
                    src={product.imageSrc}
                    alt={product.title}
                    className="w-full h-auto rounded-lg"
                    style={{ aspectRatio: "350/200", objectFit: "cover" }}
                  />
                  {product.discount && (
                    <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  )}
                  <FaInfoCircle
                    className="absolute top-2 right-2 text-gray-200 cursor-pointer"
                    size={24}
                    onClick={() => handleIconClick(product)}
                  />
                </div>
                <div className="flex justify-between items-center mt-2 text-white">
                  <p>{product.title}</p>
                  <p className="flex items-center">
                    Value: {product.price}
                    <BsCurrencyDollar />
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Modal for showing product information */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md text-white relative">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={closeInfo}
            >
              &times;
            </button>
            <h3 className="text-2xl mb-4">{selectedProduct.title}</h3>
            <p className="flex items-center">
              Value: {selectedProduct.price}
              <BsCurrencyDollar />
            </p>
            {selectedProduct.discount && (
              <p>Discount: {selectedProduct.discount}</p>
            )}
            <img
              src={selectedProduct.imageSrc}
              alt={selectedProduct.title}
              className="w-full h-auto rounded-lg mt-4"
            />
          </div>
          
        <div><p>Hello World</p></div>
        </div>
      )}
    </div>
  )
}

export default Birds
