// ContactDetails.js

import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Grid, Container, Typography, TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';

const StyledContainer = styled(Container)({
    paddingTop: 2,
    paddingBottom: 2,
  });
  
  // StyledContactDetails includes the background styling for the ContactDetails section
  const StyledContactDetails = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("https://www.catenon.com/front/img/backgrounds/bg-contact.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
  });

  const Background = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("http://www.rq8tech.com/wp-content/uploads/2020/04/contact-us-banner.jpeg")',
    
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    backgroundSize:'inherit',
    length:'70%',
    width:'75%',
    
  });
  

const StyledGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const StyledTextField = styled(TextField)({
  marginBottom: 2, // theme.spacing(2) in the old styling solution
});

const StyledButton = styled(Button)({
  marginTop: 2, // theme.spacing(2) in the old styling solution
});

const StyledTypography = styled(Typography)({
    marginBottom: '0.5rem', // Adjust the margin as needed
  });

const ContactDetails = ({ onSubmit }) => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!contactDetails.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactDetails.email.trim() || !emailRegex.test(contactDetails.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!contactDetails.phone.trim()) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(contactDetails);
      setContactDetails({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
      <StyledContactDetails>
    <StyledContainer>
    <StyledTypography variant="h2" style={{ marginBottom: '0.5rem' }}>
        Contact Details
      </StyledTypography>
        <Background>
      <StyledGrid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField
              label="Name"
              name="name"
              value={contactDetails.name}
              onChange={handleInputChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
            <StyledTextField
              label="Email"
              type="email"
              name="email"
              value={contactDetails.email}
              onChange={handleInputChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <StyledTextField
              label="Phone"
              type="tel"
              name="phone"
              value={contactDetails.phone}
              onChange={handleInputChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              name="message"
              value={contactDetails.message}
              onChange={handleInputChange}
            />
            <StyledButton variant="contained" color="primary" type="submit">
              Submit
            </StyledButton>
          </StyledForm>
        </Grid>
        
      </StyledGrid>
    </Background>
    </StyledContainer>
      </StyledContactDetails>
  );
};

ContactDetails.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactDetails;
