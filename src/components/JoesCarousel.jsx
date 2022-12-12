import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import CategoryLabel from "./CategoryLabel";
import AvailabilityLabel from "./AvailabilityLabel";
// import img1 from "/ps41.jpg";
// import img2 from "/ps42.jpg";

// const slides = [
//   {
//     title: "Get Started",
//     subtitle: "Start with your email",
//     //   control: <input type="email" placeholder="Email" />,
//     image: img1,
//   },
//   {
//     title: "Your Password",
//     subtitle: "Let's make things secure",
//     //   control: <input type="password" placeholder="Password" />,
//     image: img2,
//   },
// ];

export const Carousel = ({ product }) => (
  <div className="carouselContainer">
    <ReactCarousel
      className="react-carousel"
      showArrows={true}
      showStatus={true}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
    >
      {product?.images
        .map((image, ix) => {
          return {
            title: product.name,
            subtitle: ix,
            image: "/" + image,
          };
        })
        .map((slide) => (
          <div key={slide.title} className="react-carousel-slide">
            <div className="image-wrapper">
              <img src={slide.image} />
            </div>
            {slide.control}
          </div>
        ))}
    </ReactCarousel>
    <div className="descriptionContainer">
      <AvailabilityLabel product={product}/>
      <h2>{product?.name}</h2>
      <h3>$ {product?.price.toLocaleString("de-DE")}</h3>
      <div className="categoryHolder">
        {product?.categories.map((category) => (
          <CategoryLabel key={category} category={category} />
        ))}
      </div>
      <p>{product?.description}</p>
    </div>
  </div>
);
