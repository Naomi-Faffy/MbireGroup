import Shop1 from '../assets/shop1.jpg'
import Shop2 from '../assets/shop2.jpg'
import Shop3 from '../assets/shop3.jpg'
import Shop4 from '../assets/shop4.jpg'
import Shop5 from '../assets/shop5.jpg'
import Shop6 from '../assets/shop6.jpg'

export default function Shop(){
  const products = [
    {
      id: 1,
      name: 'Organic Vegetables Bundle',
      image: Shop1,
      price: '$45.99',
      description: 'Fresh, organic vegetables harvested daily'
    },
    {
      id: 2,
      name: 'Sustainable Grains',
      image: Shop2,
      price: '$32.50',
      description: 'Premium quality grains from our farms'
    },
    {
      id: 3,
      name: 'Premium Farm Seeds',
      image: Shop3,
      price: '$28.75',
      description: 'High-yield seeds for sustainable farming'
    },
    {
      id: 4,
      name: 'Eco-Friendly Fertilizer',
      image: Shop4,
      price: '$35.00',
      description: 'Natural fertilizer for optimal crop health'
    },
    {
      id: 5,
      name: 'Organic Herbs Pack',
      image: Shop5,
      price: '$24.99',
      description: 'Fresh culinary and medicinal herbs'
    },
    {
      id: 6,
      name: 'Agricultural Tools Set',
      image: Shop6,
      price: '$89.99',
      description: 'Professional-grade sustainable tools'
    }
  ]

  return (
    <section id="shop" className="shop">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">Shop</div>
          <h2>Mbire Marketplace</h2>
          <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginTop: '1rem'}}>Discover our premium products from sustainable agriculture and diversified operations</p>
        </div>
        <div className="shop-grid">
          {products.map(product => (
            <div key={product.id} className="shop-card">
              <div className="shop-card-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="shop-card-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="shop-card-footer">
                  <span className="price">{product.price}</span>
                  <button className="btn" aria-label={`Add ${product.name} to cart`}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
