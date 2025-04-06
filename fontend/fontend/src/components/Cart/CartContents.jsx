import React from "react";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img src={product.image} alt={product.name}  className="w-20 h-24 object-cover mr-4 rounded"/>
          </div>
          <div className="">
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">size: {product.size} | color: {product.color}</p>
              <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
