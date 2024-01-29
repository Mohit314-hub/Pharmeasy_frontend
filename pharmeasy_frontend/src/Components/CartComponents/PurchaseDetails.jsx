// PurchaseDetails.jsx
import React from "react";
import { Box, Heading, Text, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PurchaseDetails = () => {
  // Mock data for purchased product and payment option
  const product = {
    desc: "Liveasy Wellness Vitamin C (990mg) With Zinc (10mg) - Powerful Immunity Booster - 60 Veg Tablets",
    newPrice: 719,
    qty: 2,
  };

  const paymentOption = "COD"; // Replace with actual payment option

  return (
    <Box p="8" maxW="600px" mx="auto">
      <Heading mb="6">Purchase Details</Heading>
      {/* Order Booking Successful Message */}
      <Alert status="success" mb="4">
        <AlertIcon />
        Order Booking Successful! Thank you for shopping with us.
      </Alert>

      {/* Product Details */}
      <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
        <Text fontSize="lg" fontWeight="bold">
          {product.desc}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Quantity: {product.qty}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Price: ₹{product.newPrice * product.qty}
        </Text>
      </Box>

      {/* Payment Option Details */}
      <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
        <Text fontSize="lg" fontWeight="bold">
          Payment Option
        </Text>
        <Text fontSize="sm" color="gray.500">
          {paymentOption}
        </Text>
      </Box>

      {/* Delivery Details (Add your actual delivery details here) */}
      <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
        <Text fontSize="lg" fontWeight="bold">
          Delivery Address
        </Text>
        <Text fontSize="sm" color="gray.500">
          Nit Jalandhar MBH-F
        </Text>
      </Box>

      {/* Back to Cart Button */}
      <Link to="/">
        <Button variant="outline" colorScheme="teal" mt="4">
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default PurchaseDetails;
