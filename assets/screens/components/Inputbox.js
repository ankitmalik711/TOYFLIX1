import axios from 'axios';
import { Alert } from 'react-native';

// Function to handle registration
const handleRegister = async (mobile, username, email, pincode) => {
  // Validate fields to ensure none are empty
  if (!mobile || !username || !email || !pincode) {
    Alert.alert('Error', 'All fields are required.');
    return;
  }

  // Ensure all fields are strings and trim any extra spaces
  const mobileStr = String(mobile).trim();
  const usernameStr = String(username).trim();
  const emailStr = String(email).trim();
  const pincodeStr = String(pincode).trim();

  const formData = new FormData();
  formData.append('mobile', mobileStr);
  formData.append('username', usernameStr);
  formData.append('email', emailStr);
  formData.append('pincode', pincodeStr);

  try {
    // Send the POST request
    const response = await axios.post(
      'https://toyflix.in/wp-json/api/v1/sign-up/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 15000, // 15 seconds timeout
      }
    );

    // Check for successful response
    if (response.status === 200 && response.data.status === 200) {
      Alert.alert('Registration successful!');
      // Navigate to another screen or perform other actions
    } else {
      // Handle non-successful responses
      Alert.alert(`Server error: ${response.data.message || 'Failed to create user.'}`);
    }
  } catch (error) {
    console.error('Error during API request:', error);

    if (error.response) {
      // Server responded with a status code outside the range of 2xx
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      Alert.alert(`Server error: ${error.response.data.message || 'An error occurred.'}`);
    } else if (error.request) {
      // Request was made but no response received
      Alert.alert('No response from the server. Please check your network connection.');
    } else {
      // Something happened in setting up the request
      Alert.alert('An error occurred. Please try again later.');
    }
  }
};

// Example usage
const mobile = 'YOUR_MOBILE_NUMBER';
const username = 'YOUR_USERNAME';
const email = 'YOUR_EMAIL';
const pincode = 'YOUR_PINCODE';

handleRegister(mobile, username, email, pincode);
