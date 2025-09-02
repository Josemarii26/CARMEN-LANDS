import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductCard.css";
import { Tag, Button, Spinner, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const ProductCard4 = ({ product, addToCart, handleToggleCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    handleToggleCart();
  };

  const handleHover = () => setIsHovered(true);
  const handleHoverLeave = () => setIsHovered(false);
  const handleImageLoad = () => setLoading(false);
  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const isMobile = window.innerWidth < 1050;

  return (
    <div
      className={`product-card-vertical2 ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      {/* Mostrar siempre el carrusel */}
      <div className={isMobile ? "carousel-2-mobile" : "carousel-2"}>
        <Carousel
          autoPlay={false}
          infiniteLoop={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          centerMode={false}
          swipeable={true}
          emulateTouch={true}
          showArrows={!isMobile}
        >
          {product.images.map((image, index) => (
            <div
              key={index}
              className="image-container"
              onClick={() => handleImageClick(index)}
              style={{ cursor: "pointer" }}
            >
              {loading && (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <Spinner
                    sthickness="6px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="orange.700"
                    size="xl"
                  />
                </Box>
              )}
              <img
                src={image}
                alt={`imagen-${index}`}
                className="product-image"
                style={{ display: loading ? "none" : "inline-flex" }}
                onLoad={handleImageLoad}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Información según hover */}
      {isHovered || isMobile ? (
        <>
          <h4>{product.name}</h4>
          <p>✅En Stock✅</p>
          <p id="description">{product.description}</p>
          <Tag size={"md"} key={"md"} variant="solid" colorScheme="orange" bg="orange.700">
            {product.label}
          </Tag>
          <h3>{product.price} €</h3>
        </>
      ) : (
        <>
          <h3>{product.name}</h3>
          <h4>{product.price} €</h4>
        </>
      )}

      <Button
        rightIcon={<ArrowForwardIcon />}
        onClick={handleAddToCart}
        colorScheme="orange"
        bg="orange.600"
        variant="solid"
      >
        Añadir al carrito
      </Button>

      {isLightboxOpen && (
        <Lightbox
          mainSrc={product.images[photoIndex]}
          nextSrc={product.images[(photoIndex + 1) % product.images.length]}
          prevSrc={
            product.images[
              (photoIndex + product.images.length - 1) % product.images.length
            ]
          }
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + product.images.length - 1) % product.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % product.images.length)
          }
          imagePadding={50}
          reactModalStyle={{ overlay: { zIndex: 2000 } }}
        />
      )}
    </div>
  );
};
