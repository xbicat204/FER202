import { Link } from 'react-router-dom';
import './News.css';

function News() {
  const newsList = [
  {
    id: 1,
    title: "🍕 Pizza Hải Sản Phô Mai – Best Seller",
    desc: "Pizza hải sản tươi ngon kết hợp phô mai béo ngậy, đế bánh giòn rụm.",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
  {
    id: 2,
    title: "🍔 Burger Bò Phô Mai Đặc Biệt",
    desc: "Burger bò 100% thịt tươi, phô mai tan chảy, sốt đặc trưng.",
    image: "https://burgerking.vn/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/e/x/exc_whopper_2.jpg",
  },
  {
    id: 3,
    title: "🍗 Gà Rán Giòn Cay",
    desc: "Gà rán giòn rụm bên ngoài, mềm ngọt bên trong, cay nhẹ hấp dẫn.",
    image: "https://mediamart.vn/images/uploads/2022/287c6cc2-836a-4106-88b1-d0325ef3e7ad.jpg",
  },
  {
    id: 4,
    title: "🍝 Mì Ý Sốt Bò Bằm",
    desc: "Mì Ý chuẩn vị Ý với sốt bò bằm đậm đà.",
    image: "https://i-giadinh.vnecdn.net/2022/04/20/Buoc-9-9-3230-1650439557.jpg",
  },
  {
    id: 5,
    title: "🌮 Taco Bò Mexico",
    desc: "Taco bò cay nhẹ, kết hợp rau tươi và sốt Mexico đặc trưng.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrDkH0GBNSQASWwyx8_kzAjWDgEf1UykORQ&s",
  },
  {
    id: 6,
    title: "🥗 Salad Trộn Healthy",
    desc: "Salad rau xanh, ức gà và sốt mè rang – lựa chọn lành mạnh.",
    image: "https://www.cocoichibanya.vn/wp-content/uploads/2021/03/salad.jpg",
  },
  {
    id: 7,
    title: "🍟 Khoai Tây Chiên Phô Mai",
    desc: "Khoai tây chiên giòn phủ phô mai béo ngậy.",
    image: "https://daylambanh.edu.vn/wp-content/uploads/2020/02/khoai-tay-lac-pho-mai.jpg",
  },
  {
    id: 8,
    title: "🍕 Pizza Pepperoni Truyền Thống",
    desc: "Pizza pepperoni đậm vị, topping đầy đặn.",
    image: "https://img.dominos.vn/viber_image_2024-12-20_09-38-33-498.jpg",
  },
  {
    id: 9,
    title: "🥪 Sandwich Gà Nướng",
    desc: "Sandwich gà nướng thơm lừng, kèm rau và sốt đặc biệt.",
    image: "https://cdn2.fptshop.com.vn/unsafe/sandwich_ga_1_e5fa69121c.JPG",
  },
  {
    id: 10,
    title: "🥤 Trà Đào Cam Sả",
    desc: "Thức uống giải khát mát lạnh, hương vị tự nhiên.",
    image: "https://dayphache.edu.vn/wp-content/uploads/2024/06/cach-lam-tra-dao.jpg",
  },
];


  return (
    <div className="page">
      <h1>📰 Danh Sách Tin Tức</h1>
      <div className="news-grid">
        {newsList.map((item) => (
          <Link key={item.id} to={`/news/${item.id}`} style={{ textDecoration: 'none' }}>
            <div className="news-card">
              <img src={item.image} alt={item.title} />
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="read-more">Xem chi tiết →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default News;