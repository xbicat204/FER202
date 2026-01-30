import React, { useState } from "react";
import "./OurMenu.css";

import anh1 from "../../assets/anh1.jpg";
import anh2 from "../../assets/anh2.jpg";
import anh3 from "../../assets/anh3.jpg";
import anh4 from "../../assets/anh4.jpg";
import anh5 from "../../assets/anh5.jpg";
import anh6 from "../../assets/anh6.webp";
import anh7 from "../../assets/anh7.jpg";
import anh8 from "../../assets/anh8.jpg";
import anh9 from "../../assets/anh9.jpg";
import anh10 from "../../assets/anh10.jpg";

function OurMenu() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Margherita Pizza",
      image: anh1,
      price: 8,
      oldPrice: 10,
      tag: "SALE",
      description:
        "Phô mai Mozzarella tan chảy kết hợp sốt cà chua Ý truyền thống."
    },
    {
      id: 2,
      name: "Veggie Garden Pizza",
      image: anh2,
      price: 9,
      tag: "NEW",
      description: "Rau củ tươi gồm ớt chuông, nấm và ô-liu, phô mai feta."
    },
    {
      id: 3,
      name: "Hawaiian Special",
      image: anh3,
      price: 11,
      description: "Dứa tươi ngọt dịu kết hợp thịt nguội đậm đà, phô mai."
    },
    {
      id: 4,
      name: "Pesto Chicken Pizza",
      image: anh4,
      price: 10,
      oldPrice: 12,
      tag: "SALE",
      description: "Gà nướng thơm mềm hòa quyện cùng sốt Pesto, phô mai."
    },
    {
      id: 5,
      name: "Seafood Delight",
      image: anh5,
      price: 14,
      oldPrice: 17,
      tag: "SALE",
      description: "Hải sản tươi ngon với tôm, mực và phô mai."
    },
    {
      id: 6,
      name: "BBQ Chicken Pizza",
      image: anh6,
      price: 10,
      oldPrice: 12,
      tag: "SALE",
      description: "Gà nướng BBQ đậm vị cùng hành tây, phô mai."
    },
    {
      id: 7,
      name: "Cheese Lover Pizza",
      image: anh7,
      price: 11,
      oldPrice: 16,
      tag: "SALE",
      description: "Lớp phô mai dày béo ngậy tan chảy, hấp dẫn."
    },
    {
      id: 8,
      name: "Pepperoni Supreme",
      image: anh8,
      price: 10,
      oldPrice: 14,
      tag: "SALE",
      description: "Xúc xích Pepperoni cay nhẹ hấp dẫn, đậm đà."
    },
    {
      id: 9,
      name: "Four Cheese Pizza",
      image: anh9,
      price: 7,
      oldPrice: 8,
      tag: "SALE",
      description: "Sự kết hợp của 4 loại phô mai cao cấp."
    },
    {
      id: 10,
      name: "Beef Mushroom Pizza",
      image: anh10,
      price: 6,
      oldPrice: 9,
      tag: "SALE",
      description: "Thịt bò mềm ngọt kết hợp nấm tươi, phô mai."
    }
  ];

  return (
    <section className="menu">
      <h2 className="menu-title">Our Menu</h2>

      <div className="menu-list">
        {products.map((item) => (
          <div className="menu-card" key={item.id}>
            {item.tag && <span className="menu-tag">{item.tag}</span>}

            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <div className="menu-price">
              {item.oldPrice && (
                <span className="old-price">${item.oldPrice}</span>
              )}
              <span className="new-price">${item.price}</span>
            </div>

            <div className="menu-actions">
              <button
                className="btn view-btn"
                onClick={() => setSelectedProduct(item)}
              >
                View Detail
              </button>

              <button
                className="btn buy-btn"
                onClick={() =>
                  alert(`Đã thêm ${item.name} vào giỏ hàng`)
                }
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p className="price">${selectedProduct.price}</p>

            <button
              className="btn buy-btn"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default OurMenu;
