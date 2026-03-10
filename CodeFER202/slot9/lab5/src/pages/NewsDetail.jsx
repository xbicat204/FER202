import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Pizza Hải Sản Phô Mai",
    image:
      "https://images.unsplash.com/photo-1548365328-8b849e6c7c2d",
    desc: "Pizza hải sản tươi ngon kết hợp phô mai béo ngậy.",
    price: "199.000đ",
    postId: 1,
    userId: 1,
  },
  {
    id: 2,
    title: "Burger Bò Phô Mai",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    desc: "Burger bò 100% thịt tươi, phô mai tan chảy.",
    price: "89.000đ",
    postId: 2,
    userId: 2,
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Không tìm thấy sản phẩm</h2>;

  return (
    <div className="page">
      {/* Thông tin sản phẩm */}
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="400" />
      <p>{product.desc}</p>
      <h3>Giá: {product.price}</h3>

      <hr />

    
    </div>
  );
}

export default ProductDetail;
