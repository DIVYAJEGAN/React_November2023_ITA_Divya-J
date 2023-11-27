import React from 'react';
import Layout from '../components/Layout/Layout';

const properties = [
  {
    id: 1,
    details: 'Commercial Space with High Visibility',
  },
  {
    id: 2,
    details: 'Modern Office Building with Parking',
  },
  {
    id: 3,
    details: 'Prime Retail Location in City Center',
  },
  {
    id: 4,
    details: 'Investment Opportunity: Multi-Use Complex',
  },
  {
    id: 5,
    details: 'Warehouse with Easy Access to Highways',
  },
  {
    id: 6,
    details: 'Luxurious Office Suites with Panoramic Views',
  },
];

const CommercialPage = () => {
  return (
    <Layout>
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#394240', color: '#F4EAE2', padding: '16px', boxSizing: 'border-box' }}>
      <h2 style={{ borderBottom: '2px solid #F4EAE2', paddingBottom: '8px' }}>Commercial Real Estate Services</h2>

      <p style={{ marginTop: '8px' }}>
        Explore our comprehensive commercial real estate services designed to meet the unique needs of businesses.
        Whether you're looking for office spaces, retail locations, or investment opportunities, we have you covered.
      </p>

      <h3 style={{ marginTop: '16px', borderBottom: '2px solid #F4EAE2', paddingBottom: '8px' }}>Featured Properties</h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {properties.map((property) => (
          <div key={property.id} style={{ flex: '0 0 48%', marginBottom: '16px', padding: '16px', height: '150px', backgroundColor: '#557A95', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}>
            <div>
              <p style={{ fontWeight: 'bold' }}>{property.details}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '16px' }}>
        Ready to elevate your business with the perfect commercial space? Contact us today for personalized assistance.
      </p>

      <button style={{ marginTop: '16px', padding: '12px 24px', backgroundColor: '#F4EAE2', color: '#394240', border: 'none', cursor: 'pointer', borderRadius: '4px', fontSize: '16px' }}>
        Contact Us
      </button>
    </div>
    </Layout>
  );
};

export default CommercialPage;
