import { useState } from "react";
import { Box, Flex, Image, Text, Button, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input } from "@chakra-ui/react";
import CartFilter from "./CartFilter";
import { AiFillStar } from "react-icons/ai";
import {Link} from "react-router-dom"
const CartProductCard = () => {
  const product = {
    img1: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-3-1654169499.jpg",
    desc: "Liveasy Wellness Vitamin C (990mg) With Zinc (10mg) - Powerful Immunity Booster - 60 Veg Tablets",
    company: "LIVEASY",
    ratings: 4.4,
    newPrice: 719,
    originalPrice: 799,
    offer: 10,
    qty: 1
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleAddToCart = () => {
    // Open the modal when "Add to Cart" is clicked
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  const handleConfirmOrder = () => {
    // Add functionality to confirm the order and handle delivery address
    console.log("Order Confirmed with Delivery Address:", deliveryAddress);

    // Close the modal after order confirmation
    setIsModalOpen(false);
  };

  return (
    <Flex
      border="1.5px solid #dde0e2"
      h="14.5rem"
      w="100%"
      marginY="12px"
      borderRadius="lg"
      p="20px 10px"
      textAlign="left"
      position="relative"
      color="#4f585e"
    >
      <Box w="16%" p="4px">
        <Flex justify="center" align="center">
          <Image w="100%" src={product.img1} />
        </Flex>
      </Box>
      <Box h="100%" w="80%" ml="3">
        <Text
          istruncated="true"
          fontSize="16px"
          fontWeight="700"
          noOfLines={2}
          height="50px"
          w="90%"
        >
          {product.desc}
        </Text>
        <Flex align="center" justify="space-between">
          {/* Liveasy, Discount Price, Rating, Quantity */}
          <Flex direction="column" align="end">
            <Text fontSize="14px" color="rgb(136, 151, 162)" marginY={"4px"}>
              By {product.company}
            </Text>
            {product.offer && (
              <Flex align="center" justify="space-between">
                <Text color="red" fontSize="11px" fontWeight="500">
                  {product.offer}% OFF
                </Text>
                <Text fontSize="13px" fontWeight="400" color="#8e9ca7" textDecoration="line-through">
                  ₹{product.originalPrice}
                </Text>
              </Flex>
            )}
            <Flex align="center">
              <AiFillStar color="#ffc600" />
              <Text fontSize="14px" fontWeight="600" ml="2">
                Rating: {product.ratings}{" "}
              </Text>
            </Flex>
            <Flex align="center">
              <Text fontSize="16px" fontWeight="700" py="6px" padding="2px">
                ₹{product.newPrice}
              </Text>
              <CartFilter />
            </Flex>
          </Flex>
        </Flex>
        <Text fontSize="13px" fontWeight="500" color="rgb(111, 120, 126)">
          Delivery by {new Date().toLocaleDateString("en-IN")}
        </Text>
      </Box>

      {/* Add to Cart Button UI */}
      <Flex position="absolute" bottom="4" left="50%" transform="translateX(-50%)">
        <Button
          variant="outline"
          colorScheme="teal"
          size="md"
          onClick={handleAddToCart}
        >
          CONFIRM
        </Button>
      </Flex>

      {/* Delivery Address Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Delivery Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="14px" color="rgb(136, 151, 162)" mb="2">
              Please enter the delivery address for your order:
            </Text>
            <Input
              type="text"
              placeholder="Enter Delivery Address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Link to="/paymentoptions">
            <Button colorScheme="teal" onClick={handleConfirmOrder}>
              Confirm Order
            </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CartProductCard;
