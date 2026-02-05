import Carousel from "./Carousel";

function Home() {
  return (
    <div className="home-page">
      {/* Carousel full width */}
      <Carousel />

      {/* Nội dung có layout */}
      <div className="page">
        <h2 className="news-title">News Category</h2>
        {/* news grid phía dưới */}
      </div>
    </div>
  );
}

export default Home;
