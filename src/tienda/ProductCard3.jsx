import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProductCard.css';
import { Tag, Button, Spinner } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const ProductCard3 = ({ product, addToCart, handleToggleCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageUrls, setImageUrls] = useState(product.images);

  useEffect(() => {
    // Reset loading and error states when imageUrls change
    setLoading(true);
    setError(false);
  }, [imageUrls]);

  const handleAddToCart = () => {
    addToCart(product);
    handleToggleCart();
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = (index) => {
    setError(true);
    setTimeout(() => {
      setError(false);
      setLoading(true); // Mostrar el loader nuevamente
      setImageUrls(prevUrls => {
        const newUrls = [...prevUrls];
        newUrls[index] = `${newUrls[index]}?timestamp=${new Date().getTime()}`; // Añadir timestamp para forzar recarga
        return newUrls;
      });
    }, 2000); // Reintentar después de 2 segundos
  };

  const isMobile = window.innerWidth < 1050;

  const renderImage = (imagen, index) => (
    <>
      {loading && <Spinner />}
      {error ? (
        <div>Reintentando...</div>
      ) : (
        <img
          src={imagen}
          alt='imagen'
          onLoad={handleImageLoad}
          onError={() => handleImageError(index)}
          style={{ display: loading ? 'none' : '' }}
        />
      )}
    </>
  );

  return (
    <div
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      {isHovered || isMobile ? (
        <>
          {isMobile && (
            <div className='carousel-2-mobile'>
              <Carousel
                autoPlay={false}
                infiniteLoop={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                centerMode={false}
                swipeable={true}
                emulateTouch={true}
                showArrows={false}
              >
                {imageUrls.map((imagen, index) => (
                  <div key={index} className="image-container">
                    {renderImage(imagen, index)}
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          {isHovered && !isMobile && (
            <div className='carousel-2'>
              <Carousel
                autoPlay={false}
                infiniteLoop={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                centerMode={false}
                swipeable={true}
                emulateTouch={true}
                showArrows={false}
              >
                {imageUrls.map((imagen, index) => (
                  <div key={index} className="image-container">
                    {renderImage(imagen, index)}
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          <h4>{product.name}</h4>
          <p>✅En Stock✅</p>
          <p id='description'>{product.description}</p>
          <Tag size={'md'} key={'md'} variant='solid' colorScheme='red' bg='red.700'>
            {product.label}
          </Tag>

          <h3>{product.price} €</h3>
          <Button rightIcon={<ArrowForwardIcon />} onClick={handleAddToCart} colorScheme='red' bg='red.700' variant='solid'>
            Añadir al carrito
          </Button>
        </>
      ) : (
        <>
          <div className="image-container">
            {renderImage(`${imageUrls[0]}?timestamp=${new Date().getTime()}`, 0)}
          </div>
          <h3>{product.name}</h3>
          <h4>{product.price} €</h4>
          <Button rightIcon={<ArrowForwardIcon />} onClick={handleAddToCart} colorScheme='red' bg='red.700' variant='solid'>
            Añadir al carrito
          </Button>
        </>
      )}
    </div>
  );
};
