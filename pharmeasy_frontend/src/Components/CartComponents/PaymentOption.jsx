// PaymentOptions.jsx
import React, { useState } from "react";
import { Box, Heading, VStack, Text, Button, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const isOptionSelected = (option) => {
    return selectedOption === option;
  };

  return (
    <Box p="8" maxW="600px" mx="auto">
      <Heading mb="6">Payment Options</Heading>
      <VStack spacing="4" align="start">
        {/* Payment Option 1 */}
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="4"
          w="100%"
          boxShadow={isOptionSelected("Credit Card") ? "outline" : "md"}
          onClick={() => handleSelectOption("Credit Card")}
          cursor="pointer"
        >
          <Text fontSize="lg" fontWeight="bold">
            Credit Card
          </Text>
          <Divider my="2" />
          {/* Add credit card form or payment details */}
          <Text fontSize="sm" color="gray.500">
            Add your credit card details here.
          </Text>
        </Box>

        {/* Payment Option 2 */}
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="4"
          w="100%"
          boxShadow={isOptionSelected("PayPal") ? "outline" : "md"}
          onClick={() => handleSelectOption("PayPal")}
          cursor="pointer"
        >
          <Text fontSize="lg" fontWeight="bold">
            PayPal
          </Text>
          <Divider my="2" />
          {/* Add PayPal login or payment button */}
          <Text fontSize="sm" color="gray.500">
            Log in to your PayPal account or use guest checkout.
          </Text>
        </Box>

        {/* Payment Option 3 (COD) */}
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="4"
          w="100%"
          boxShadow={isOptionSelected("COD") ? "outline" : "md"}
          onClick={() => handleSelectOption("COD")}
          cursor="pointer"
        >
          <Text fontSize="lg" fontWeight="bold">
            COD
          </Text>
          <Divider my="2" />
          {/* Add COD details */}
          <Text fontSize="sm" color="gray.500">
            Pay at the time of delivery
          </Text>
        </Box>

        {/* Confirm Order Button */}
        <Link to="/purchasedetails">
        <Button colorScheme="teal" size="lg" mt="8">
          Confirm Order
        </Button>
        </Link>

        {/* Back to Cart Button */}
        <Link to="/">
          <Button variant="link" mt="4" color="teal.500">
            Back to Cart
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default PaymentOptions;
