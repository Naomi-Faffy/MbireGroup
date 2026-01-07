export default function Shop(){
  const products = [
    {
      id: 1,
      name: 'Organic Vegetables Bundle',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop',
      price: '$45.99',
      description: 'Fresh, organic vegetables harvested daily'
    },
    {
      id: 2,
      name: 'Sustainable Grains',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop',
      price: '$32.50',
      description: 'Premium quality grains from our farms'
    },
    {
      id: 3,
      name: 'Premium Farm Seeds',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500&fit=crop',
      price: '$28.75',
      description: 'High-yield seeds for sustainable farming'
    },
    {
      id: 4,
      name: 'Eco-Friendly Fertilizer',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop',
      price: '$35.00',
      description: 'Natural fertilizer for optimal crop health'
    },
    {
      id: 5,
      name: 'Organic Herbs Pack',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=500&fit=crop',
      price: '$24.99',
      description: 'Fresh culinary and medicinal herbs'
    },
    {
      id: 6,
      name: 'Agricultural Tools Set',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop',
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
                <img src={product.image} alt={product.name} />
              </div>
              <div className="shop-card-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="shop-card-footer">
                  <span className="price">{product.price}</span>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
