// src/components/AgentPage.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
} from '@mui/material';


const localities = [
  {
    name: 'Mumbai',
    agents: [
      {
        id: 1,
        name: 'Raj Sharma',
        email: 'raj.sharma@example.com',
        phone: '(91) 999-888-7777',
        listings: [
          { name: 'Sea View Apartment', price: '₹2,500,000', details: '3 Bed, 2.5 Bath', rating: 4.5 },
          { name: 'Luxury Penthouse', price: '₹5,000,000', details: '4 Bed, 3 Bath', rating: 5 },
        ],
      },
      {
        id: 2,
        name: 'Priya Patel',
        email: 'priya.patel@example.com',
        phone: '(91) 888-777-6666',
        listings: [
          { name: 'Downtown Condo', price: '₹1,800,000', details: '2 Bed, 2 Bath', rating: 4 },
          { name: 'City Center Loft', price: '₹3,000,000', details: '3 Bed, 2.5 Bath', rating: 4.8 },
        ],
      },
      // Add more agents for Mumbai as needed
    ],
  },
  {
    name: 'Delhi',
    agents: [
      {
        id: 3,
        name: 'Amit Verma',
        email: 'amit.verma@example.com',
        phone: '(91) 777-666-5555',
        listings: [
          { name: 'Modern Villa', price: '₹4,000,000', details: '4 Bed, 3.5 Bath', rating: 4.2 },
          { name: 'City View Penthouse', price: '₹6,000,000', details: '5 Bed, 4 Bath', rating: 4.5 },
        ],
      },
      {
        id: 4,
        name: 'Sanya Gupta',
        email: 'sanya.gupta@example.com',
        phone: '(91) 666-555-4444',
        listings: [
          { name: 'Suburban Retreat', price: '₹2,500,000', details: '3 Bed, 2 Bath', rating: 4 },
          { name: 'Modern Apartment', price: '₹1,200,000', details: '2 Bed, 2 Bath', rating: 4.2 },
        ],
      },
      // Add more agents for Delhi as needed
    ],
  },
  {
    name: 'Bangalore',
    agents: [
      {
        id: 5,
        name: 'Rahul Kumar',
        email: 'rahul.kumar@example.com',
        phone: '(91) 555-444-3333',
        listings: [
          { name: 'Tech Hub Condo', price: '₹1,500,000', details: '3 Bed, 2.5 Bath', rating: 4.5 },
          { name: 'Lakefront Villa', price: '₹3,500,000', details: '4 Bed, 3 Bath', rating: 4.8 },
        ],
      },
      {
        id: 6,
        name: 'Ananya Singh',
        email: 'ananya.singh@example.com',
        phone: '(91) 444-333-2222',
        listings: [
          { name: 'Green City Apartment', price: '₹800,000', details: '2 Bed, 2 Bath', rating: 4 },
          { name: 'Spacious Duplex', price: '₹2,000,000', details: '4 Bed, 3.5 Bath', rating: 4.2 },
        ],
      },
      // Add more agents for Bangalore as needed
    ],
  },
  {
    name: 'Chennai',
    agents: [
      {
        id: 7,
        name: 'Karthik Reddy',
        email: 'karthik.reddy@example.com',
        phone: '(91) 777-888-9999',
        listings: [
          { name: 'Beachfront Villa', price: '₹4,500,000', details: '3 Bed, 3 Bath', rating: 4.7 },
          { name: 'Luxury Condo', price: '₹2,800,000', details: '2 Bed, 2 Bath', rating: 4.2 },
        ],
      },
      {
        id: 8,
        name: 'Divya Kapoor',
        email: 'divya.kapoor@example.com',
        phone: '(91) 999-888-7777',
        listings: [
          { name: 'Downtown Loft', price: '₹1,200,000', details: '2 Bed, 1.5 Bath', rating: 4 },
          { name: 'City Center Penthouse', price: '₹3,200,000', details: '3 Bed, 2.5 Bath', rating: 4.5 },
        ],
      },
      // Add more agents for Chennai as needed
    ],
  },
  {
    name: 'Hyderabad',
    agents: [
      {
        id: 9,
        name: 'Vikram Rajput',
        email: 'vikram.rajput@example.com',
        phone: '(91) 888-999-0000',
        listings: [
          { name: 'Modern Duplex', price: '₹1,600,000', details: '3 Bed, 2.5 Bath', rating: 4.2 },
          { name: 'Suburban Townhouse', price: '₹900,000', details: '2 Bed, 1 Bath', rating: 4 },
        ],
      },
      {
        id: 10,
        name: 'Anusha Rao',
        email: 'anusha.rao@example.com',
        phone: '(91) 000-111-2222',
        listings: [
          { name: 'Tech Park Apartment', price: '₹1,000,000', details: '2 Bed, 2 Bath', rating: 4 },
          { name: 'Riverside Villa', price: '₹3,500,000', details: '4 Bed, 3 Bath', rating: 4.5 },
        ],
      },
      // Add more agents for Hyderabad as needed
    ],
  },
  // Add more localities as needed
];

const AgentPage = () => {
    const [selectedLocality, setSelectedLocality] = useState('');
  
    const handleLocalityChange = (event) => {
      setSelectedLocality(event.target.value);
    };
  
    const selectedLocalityData = localities.find((loc) => loc.name === selectedLocality);
  
    return (
      
      <Container>
        
        <style>
          {`
            body {
                background-image: url("https://perfectagent.com.au/wp-content/uploads/2020/01/selecting-a-real-estate-agent1.jpg");
                background-size: cover;
                min-height: 100vh;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center; /* Center content horizontally */
                justify-content: center;   
                       
            }
          `}
        </style>
  
        <Typography variant="h2" gutterBottom>
          Real Estate Agents
        </Typography>
  
        {/* Locality Dropdown */}
        <Card style={{ marginBottom: '16px', backgroundColor: '#F0F0F0' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Select Locality
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="locality-label">Locality</InputLabel>
              <Select
                labelId="locality-label"
                id="locality"
                value={selectedLocality}
                onChange={handleLocalityChange}
              >
                <MenuItem value="">Select Locality</MenuItem>
                {localities.map((loc) => (
                  <MenuItem key={loc.name} value={loc.name}>
                    {loc.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
  
        {/* Display Agents based on Locality */}
        {selectedLocalityData && (
          <>
            <Card style={{ backgroundColor: '#EFEFEF' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Agents in {selectedLocalityData.name}
                </Typography>
                <Typography>
                  Number of Agents: {selectedLocalityData.agents.length}
                </Typography>
                {selectedLocalityData.agents.map(agent => (
                  <Card key={agent.id} style={{ marginTop: '16px', backgroundColor: '#FFFFF0' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {agent.name}'s Details
                      </Typography>
                      <Typography>
                        Email: {agent.email}
                        <br />
                        Phone: {agent.phone}
                      </Typography>
  
                      {/* Property Listings for the Agent */}
                      <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
                        {agent.name}'s Property Listings
                      </Typography>
                      <List>
                        {agent.listings.map((property, index) => (
                          <ListItem key={index} style={{ marginBottom: '8px' }}>
                            <ListItemText
                              primary={property.name}
                              secondary={`${property.price} - ${property.details} - Rating: ${property.rating}`}
                            />
                            <Rating value={property.rating} precision={0.5} readOnly />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
  
            {/* Contact Form (conditionally rendered) */}
            {selectedLocalityData && (
              <Card style={{ marginTop: '16px', backgroundColor: '#F5FFFA' }}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Contact the Agent
                  </Typography>
                  <form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="name"
                          label="Your Name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Your Email"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          multiline
                          rows={4}
                          id="message"
                          label="Your Message"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </Container>
    );
  };
  
  export default AgentPage;