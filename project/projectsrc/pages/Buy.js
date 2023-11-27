import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Buy = () => {
  const properties = [
    {
      id: 1,
      name: 'Spacious Villa',
      location: 'Cityville',
      price: '$500,000',
      bedrooms: 4,
      bathrooms: 3,
      area: '2500 sq. ft.',
      features: 'Swimming pool, Garden, Garage',
      image: 'http://genmice.com/design-ideas/Modern-Indian-Style-House-With-Classic-Interior/316.png',
    },
    {
      id: 2,
      name: 'Modern Apartment',
      location: 'Downtown',
      price: '$350,000',
      bedrooms: 2,
      bathrooms: 2,
      area: '1500 sq. ft.',
      features: 'Balcony, Gym, Parking',
      image: 'https://stylesatlife.com/wp-content/uploads/2016/02/Villas-in-india.jpg',
    },
    {
      id: 3,
      name: 'Luxury Penthouse',
      location: 'Skyline Towers',
      price: '$800,000',
      bedrooms: 5,
      bathrooms: 4,
      area: '3500 sq. ft.',
      features: 'Private terrace, Spa, Wine cellar',
      image: 'http://southwestmedia.pbworks.com/f/india+houses-image-3.jpg',
    },
    {
      id: 4,
      name: 'Cozy Cottage',
      location: 'Countryside',
      price: '$250,000',
      bedrooms: 2,
      bathrooms: 1,
      area: '1200 sq. ft.',
      features: 'Fireplace, Garden, Peaceful surroundings',
      image: 'https://southeastasiabackpacker.com/wp-content/uploads/2017/05/Brick-House-Hostel-1200x800_c.jpg',
    },
    {
      id: 5,
      name: 'Urban Loft',
      location: 'City Center',
      price: '$450,000',
      bedrooms: 3,
      bathrooms: 2,
      area: '1800 sq. ft.',
      features: 'Exposed brick, High ceilings, Modern design',
      image: 'https://img.cdn.zostel.com/cache/_48d83b39382934474a3408404904abb6/1__INSTAGRAM_GRID__1000x800.jpg',
    },
    {
      id: 6,
      name: 'Seaside Mansion',
      location: 'Oceanfront',
      price: '$1,200,000',
      bedrooms: 6,
      bathrooms: 5,
      area: '5000 sq. ft.',
      features: 'Private beach access, Infinity pool, Panoramic views',
      image: 'https://api.designcitylab.com/public/images/article-images/Boys-Hostel---ZED-Lab-ZED_St,-Andrews-boys-hostel-258538.jpg',
    },
  ];
  const groupedProperties = {
    'FULL HOUSE': properties.slice(0, 3),
    'APARTMENT': properties.slice(3),
  };

  return (
    <Layout>
       <div style={{ flexGrow: 1, textAlign: 'center', backgroundColor: '#ADD8E6', paddingBottom: '40px' }}>
        {/* Sub Header with Navigation Bar */}
        <AppBar position="static" color="error"  style={{ padding: '20px 0' }}>
          <Toolbar style={{ display: 'flex', justifyContent: 'center', lineHeight: '2' }}>
            <Button
              component={NavLink}
              to="/ab"
              color="inherit"
              style={navButtonStyle}
              activeStyle={activeNavButtonStyle}  // Apply different style when active
            >
              Buy
            </Button>
            <Button component={NavLink} to="/rent" color="inherit" style={navButtonStyle}>
              Rent
            </Button>
            <Button component={NavLink} to="/agent" color="inherit" style={navButtonStyle}>
              Agent
            </Button>
            <Button component={NavLink} to="/commercial" color="inherit" style={navButtonStyle}>
              Commercial
            </Button>
          </Toolbar>
        </AppBar>

        <Container style={{ marginTop: '80px' }}>
          {Object.entries(groupedProperties).map(([category, categoryProperties]) => (
            <div key={category}>
              <Typography variant="h4" gutterBottom style={{ color: '#9b59b6', marginBottom: '20px' }}>
                {category}
              </Typography>

              {/* Property cards */}
              {categoryProperties.map((property) => (
                <Grid container key={property.id} spacing={3} style={{ marginBottom: '150px' }}>
                  {/* Property Image */}
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardMedia
                        component="img"
                        alt={property.name}
                        height="300"  // Adjust the height as needed
                        image={property.image}
                      />
                    </Card>
                  </Grid>

                  {/* Property Content */}
                  <Grid item xs={12} md={6}>
                    <Card style={{ maxWidth: 600, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                      <CardContent style={category === 'FULL HOUSE' ? buyEstatesDescriptionStyle : hostelDescriptionStyle}>
                        <Typography variant="h6" gutterBottom style={{ fontSize: '24px', color: '#2196f3' }}>
                          {property.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" style={{ fontSize: '18px', color: '#757575' }}>
                          Location: {property.location}
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '20px', color: category === 'FULL HOUSE' ? '#4caf50' : '#e65100', marginTop: '8px' }}>
                          Price: {property.price}
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '18px', color: '#757575' }}>
                          Bedrooms: {property.bedrooms}
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '18px', color: '#757575' }}>
                          Bathrooms: {property.bathrooms}
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '18px', color: '#757575' }}>
                          Area: {property.area}
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '18px', color: '#757575', marginTop: '8px' }}>
                          Features: {property.features}
                        </Typography>
                        {/* Add more details or actions as needed */}
                        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                          Contact Agent
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              ))}
            </div>
          ))}
        </Container>
      </div>
    </Layout>
  );
};

// Style for navigation buttons
const navButtonStyle = {
  margin: '0 16px',
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: '#FFA07A', // Primary color
  '&:hover': {
    backgroundColor: '#f5f5f5', // Darker shade for hover
  },
};

// Style for active navigation button
const activeNavButtonStyle = {
  backgroundColor: '#1565c0', // Darker shade for active state
};

// Style for Buy Your Estates property description
const buyEstatesDescriptionStyle = {
  textAlign: 'left',
  backgroundColor: '#DCDCDC', // Light gray background
  padding: '9px',
  height: '300px', // Adjust the height as needed
   // Increase space between image and description
};

// Style for Hostel property description
const hostelDescriptionStyle = {
  textAlign: 'left',
  backgroundColor: '#ffe0b2', // Light orange background
  padding: '9px',
  height: '300px', // Adjust the height as needed
   // Increase space between image and description
};
export default Buy;
