import "./index.css";
import "./App.css";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { Tilt } from "react-tilt"; // Import Tilt component
import img from "./Assets/amazon_rainforest_mist_1350x.webp";
import img2 from "./Assets/78c72b86b644ceb89c145964e253d259.png";
import an1 from "./Assets/0_WMPS-West-Midland-Safari-Parkjp.webp";
import an2 from "./Assets/istockphoto-478234792-612x612.jpg";
import an3 from "./Assets/adult-male-gorilla-jungle-captured-600nw-2332760685.webp";
import an4 from "./Assets/giant-panda-green-jungle-forest_130291-3203.avif";
import an5 from "./Assets/60d3bcf9cfe07.image.jpg";
import an6 from "./Assets/ln7vwo-b78812949z.120110622172524000g65107tfl.2.jpg";
import Birds from "./Components/Birds";
import Slider from "./Components/Slider";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  const imageRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const { current } = imageRef;

    const xPos = (clientX / innerWidth - 0.5) * 20; // Adjust movement sensitivity
    const yPos = (clientY / innerHeight - 0.5) * 20;

    current.style.transform = `translate(${xPos}px, ${yPos}px) scale(1.01)`; // Slight zoom
  };

  const handleMouseLeave = () => {
    const { current } = imageRef;
    current.style.transform = `translate(0px, 0px) scale(1)`; // Reset to original
  };

  const handleIconClick = (product) => {
    setSelectedProduct(product); // Set the selected product
  };

  const closeInfo = () => {
    setSelectedProduct(null); // Close the information modal
  };

  const products = [
    {
      id: 1,
      title: "Lion",
      imageSrc: an1,
      price: "20,000",
      discount: "-20%",
    },
    {
      id: 2,
      title: "Tiger",
      imageSrc: an2,
      price: "22000",
      discount: "-32%",
    },
    {
      id: 3,
      title: "Godzilla",
      imageSrc: an3,
      price: "21000",
      discount: "-27%",
    },
    {
      id: 4,
      title: "Panda",
      imageSrc: an4,
      price: "15000",
      discount: "-49%",
    },
    {
      id: 5,
      title: "Zarafa",
      imageSrc: an5,
      price: "16000",
      discount: "-58%",
    },
    {
      id: 6,
      title: "Elephant",
      imageSrc: an6,
      price: "40000",
      discount: "-35%",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="overflow-x-hidden ">
        <div
          className="w-full h-[70vh] overflow-hidden relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute h-[100%] w-[100%] z-29  backdrop-blur-[10px]">
            .
          </div>
          <img
            ref={imageRef}
            src={img}
            alt="Header"
            className="w-full h-full object-cover object-bottom transition-transform duration-500 ease-out"
          />
          <img
            src={img2}
            alt="Icon"
            className="w-[100px] h-auto absolute top-0 left-0 transition-transform duration-500 ease-out z-20"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h1
              className="sm:text-4xl text-center md:text-5xl font-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to the Jungle
            </motion.h1>
            <motion.p
              className="text-xl mt-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Discover the wild side of nature
            </motion.p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-4">
        <h2 className="text-white text-2xl mb-4">Popular Animals</h2>
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
        </div>
      )}
      <Birds />
      <Slider />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
