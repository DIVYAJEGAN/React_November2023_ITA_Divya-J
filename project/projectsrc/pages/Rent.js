import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardMedia,
} from '@mui/material';

  const properties = [
    {
      id: 1,
      name: 'Luxury Apartment A',
      price: 1500,
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.squarespace-cdn.com/content/v1/5841e43c8419c26ae07ea5bd/1566842326871-ZVUK2CJLT67Q41WJUZ2M/House.jpg',
      description: `This luxurious apartment is the epitome of modern living. 
        With two spacious bedrooms and a well-designed bathroom, 
        it offers both comfort and style. The interior is tastefully 
        decorated, and large windows provide plenty of natural light. 
        The kitchen is equipped with state-of-the-art appliances, 
        making it a joy for cooking enthusiasts. The living room is 
        perfect for entertaining guests or relaxing after a long day. 
        Additionally, the apartment boasts a stunning view of the city, 
        adding to the overall appeal. Enjoy the convenience of nearby 
        amenities and the tranquility of a well-maintained neighborhood.`,
    },
    {
      id: 2,
      name: 'Spacious House B',
      price: 2500,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://cdn.wallpapersafari.com/96/43/GmzrsM.jpg',
      description: `This spacious house provides a perfect blend of comfort and 
        functionality. With three bedrooms and two bathrooms, it's an ideal 
        choice for families. The interior is thoughtfully designed to create 
        a warm and inviting atmosphere. The large living area is great for 
        gatherings, and the bedrooms offer plenty of privacy. The house is 
        surrounded by a well-maintained garden, providing a serene and 
        peaceful environment. Enjoy the convenience of nearby schools and 
        shopping centers while residing in this spacious and welcoming home.`,
    },
    {
      id: 3,
      name: 'Modern Condo C',
      price: 1800,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://cdn.wallpapersafari.com/75/41/TGbxOz.jpg',
      description: `Experience modern living in this stylish condo. With one bedroom 
        and a well-appointed bathroom, this condo is perfect for individuals 
        or couples. The open-concept design creates a sense of spaciousness, 
        and the kitchen is equipped with modern appliances. The condo is located 
        in a vibrant neighborhood, close to trendy shops and cafes. Enjoy the 
        convenience of city living in this modern and chic space.`,
    },
    {
      id: 4,
      name: 'Charming Townhouse D',
      price: 2000,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://wallpapercave.com/wp/wp2464232.jpg',
      description: `Discover the charm of this delightful townhouse. With two bedrooms 
        and two bathrooms, this home provides a cozy and inviting atmosphere. 
        The interior features elegant design elements, and the bedrooms offer 
        a comfortable retreat. The townhouse is located in a friendly neighborhood, 
        close to parks and community amenities. Enjoy the convenience of modern 
        living in this charming and well-maintained townhouse.`,
    },
    {
      id: 5,
      name: 'Cozy Apartment E',
      price: 1600,
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.alphacoders.com/462/thumb-1920-462297.jpg',
      description: `Experience comfort and coziness in this two-bedroom apartment. 
        With a well-designed bathroom and a warm living space, this apartment 
        is perfect for individuals or small families. The kitchen is equipped 
        with modern appliances, and the bedrooms provide a quiet retreat. 
        The apartment is situated in a peaceful neighborhood, offering a 
        relaxing environment for residents.`,
    },
    {
      id: 6,
      name: 'Elegant House F',
      price: 2800,
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://downloadhdwallpapers.in/wp-content/uploads/2018/01/Luxury-Home-at-Night-1920x1200.jpg',
      description: `Indulge in luxury living with this elegant four-bedroom house. 
        Featuring three bathrooms, this house is designed for spaciousness and 
        sophistication. The interior is adorned with high-end finishes, and the 
        bedrooms provide a luxurious retreat. The house is surrounded by lush 
        landscaping, creating a private and serene atmosphere. Enjoy the 
        grandeur of this elegant residence.`,
    },
    {
      id: 7,
      name: 'Stylish Condo G',
      price: 2000,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://wallpapercave.com/wp/wp3604678.jpg',
      description: `Live in style with this modern two-bedroom condo. Boasting two 
        bathrooms and a stylish interior, this condo offers a contemporary 
        living experience. The open-concept design creates a sense of 
        spaciousness, and large windows bring in plenty of natural light. 
        Located in a trendy neighborhood, this condo is perfect for those 
        who appreciate modern living and convenience.`,
    },
    {
      id: 8,
      name: 'Modern Townhouse H',
      price: 2200,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://wallpapershome.com/images/wallpapers/house-3840x2160-mansion-pool-modern-interior-high-tech-yard-4407.jpg',
      description: `Discover the modern features of this three-bedroom townhouse. 
        With two bathrooms and a contemporary design, this townhouse offers 
        both comfort and style. The bedrooms are well-appointed, and the 
        living space is designed for modern living. Located in a dynamic 
        neighborhood, this townhouse provides a convenient and stylish 
        lifestyle for its residents.`,
    },
    {
      id: 9,
      name: 'Urban Apartment I',
      price: 1700,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://propertymanagementselect.com/wp-content/uploads/2015/04/sacramento-property-management-apartments.jpg',
      description: `Experience urban living in this one-bedroom apartment. With a 
        well-designed bathroom and a modern kitchen, this apartment is ideal 
        for individuals seeking a vibrant lifestyle. The bedroom provides a 
        comfortable retreat, and the living space is perfect for entertaining 
        guests. Located in the heart of the city, this apartment offers 
        convenience and access to urban amenities.`,
    },
    {
      id: 10,
      name: 'Classic House J',
      price: 2600,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://www.topdreamer.com/wp-content/uploads/2014/12/2.jpg',
      description: `Step into classic elegance with this three-bedroom house. 
        Featuring two bathrooms and timeless design elements, this house 
        exudes charm and sophistication. The bedrooms provide a comfortable 
        sanctuary, and the living spaces are perfect for both relaxation 
        and entertainment. Situated in a well-established neighborhood, 
        this classic house offers a timeless and inviting atmosphere.`,
    },
  ];
  
  
  const RentPage = () => {
    const [selectedProperty, setSelectedProperty] = React.useState('');
  
    const handlePropertyChange = (event) => {
      setSelectedProperty(event.target.value);
    };
  
    const handleRentRequest = () => {
      console.log(`Request to rent ${selectedProperty} has been submitted.`);
    };
  
    const backgroundImageStyle = {
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundImage: selectedProperty
        ? `url(${properties[selectedProperty - 1].image})`
        : 'url(https://az505806.vo.msecnd.net/cms/c31664b3-62ce-4b99-9414-de5f8130b27d/545a09fc-d0ba-48da-8237-3be6275eccc9.jpg)', // Replace the URL with your default image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'left',
    };
  
    const detailsStyle = {
      backgroundColor: '#fff00', // Customize the background color for details
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      color: '#333',
    };
  
    const descriptionStyle = {
      marginTop: '20px',
      backgroundColor: '#FFE4E1', // Customize the background color for description
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      color: '#555',
    };
  
    return (
      <Layout>
      <div style={backgroundImageStyle}>
        <Grid container spacing={3} style={{ width: '80%', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', margin: 'auto'}}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Available Properties for Rent
            </Typography>
  
            <FormControl fullWidth style={{ marginBottom: '20px' }}>
              <InputLabel id="property-select-label">Select Property</InputLabel>
              <Select
                labelId="property-select-label"
                id="property-select"
                value={selectedProperty}
                onChange={handlePropertyChange}
              >
                {properties.map((property) => (
                  <MenuItem key={property.id} value={property.id}>
                    {property.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
  
          {selectedProperty ? (
            <Grid container spacing={3} style={{ width: '100%', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', margin: 'auto'}}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={selectedProperty ? properties[selectedProperty - 1].name : ''}
                    height="100%"
                    width="100%"
                    image={selectedProperty ? properties[selectedProperty - 1].image : ''}
                  />
                </Card>
              </Grid>
  
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12} style={detailsStyle}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Property Details
                        </Typography>
                        <Typography variant="subtitle1">
                          {selectedProperty
                            ? `Name: ${properties[selectedProperty - 1].name || ''}`
                            : 'Select a property'}
                        </Typography>
                        <Typography variant="subtitle1">
                          {selectedProperty
                            ? `Price: $${properties[selectedProperty - 1].price || ''}`
                            : 'to view details'}
                        </Typography>
                        <Typography variant="subtitle1">
                          {selectedProperty
                            ? `Bedrooms: ${properties[selectedProperty - 1].bedrooms || ''}`
                            : ''}
                        </Typography>
                        <Typography variant="subtitle1">
                          {selectedProperty
                            ? `Bathrooms: ${properties[selectedProperty - 1].bathrooms || ''}`
                            : ''}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
  
                  <Grid item xs={12} style={descriptionStyle}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Property Description
                        </Typography>
                        <Typography variant="body1">
                          {selectedProperty
                            ? properties[selectedProperty - 1].description || 'No description available'
                            : ''}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="body1">Select a property to view details.</Typography>
            </Grid>
          )}
  
          <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
            {selectedProperty && (
              <Button
                variant="contained"
                color="primary"
                disabled={!selectedProperty}
                onClick={handleRentRequest}
              >
                Request to Rent
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
      </Layout>
    );
  };
  
  export default RentPage;