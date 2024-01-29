import React, { useState, useEffect } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaShareAlt, FaStar, FaRegStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { BiChevronRight } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
// import SimilarProductCarousal from "../Components/IndivisualProduct/SimilarProductCarousal";
// import DealsOfTheDayCarousel from "../Components/IndivisualProduct/DealsOfTheDayCarousel";
// import StatisticsAllCatagory from "../Components/AllCatagoriesComponents/StatisticsAllCatagory";
import {Link} from "react-router-dom"


const SingleProduct = () => {
  const [data, setData] = useState();
  const [showImg, setShowImg] = useState();

  // Mock data
  const indivisualProduct = {
  
    id:17,
        desc:"Liveasy Wellness Vitamin C (990mg) With Zinc (10mg) - Powerful Immunity Booster - 60 Veg Tablets",
        company:"LIVEASY",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-2-1654169544.jpg?dim=320x320&dpr=1&q=100",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-3-1654169499.jpg",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-6.1-1654169553.jpg",
        img4: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-7-1654169501.jpg",
        img5: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-6.1-1654169553.jpg",
        ratings: 4.4,
        newPrice: 719,
        originalPrice: 799,
        offer: 10,
        about: "LivEasy Wellness Vitamin C With Zinc 1000mg Tablets contain the goodness of Vitamin C extracted from natural sources. Vitamin C, also known as ascorbic acid is a powerful antioxidant which protects the cells from oxidative damage. It boosts immunity and protects the body from infectious diseases, allergies and environment-related illness. It plays a very important role in tissue repair, wound healing and bone strengthening. Vitamin C is a health supplement and also known to protect the body from common cold and seasonal allergies. It is known to enhance skin and hair texture. LivEasy Wellness Vitamin C With Zinc 1000mg Tablets are also packed with the immense benefits of zinc - an essential mineral. It activates the body's natural defence mechanism, increases immunity and can prevent various infections."
  };

  useEffect(() => {
    setData(indivisualProduct);
    setShowImg(indivisualProduct?.img1);
  }, [indivisualProduct]);

  const loc = ["Home", "Category", indivisualProduct?.company];

  return (
    <Box px="40px">
      <Flex className="breadCrumb" h="40px" align="center" fontSize="13px" py="35px">
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{loc[0]}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{loc[1]}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" fontSize="12px">
              {loc[2]}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Flex className="content" justify="space-between">
        <div className="leftInd">
          <Box>
            <Flex className="product" h="340px" justify="space-between">
              {/* Image Gallery */}
              <Flex className="img" w="30%" direction="column" justify="space-between" position="relative">
                {/* Main Image */}
                <Flex overflow="hidden" h="76%" border="1.5px solid #e5e5e5" borderRadius="md" align="center" justify="center" p="10px" cursor="pointer">
                  <div className="figure" style={{ padding: "0px" }}>
                    <img className="image-main" src={showImg} alt="" />
                    <img className="image-hover" src={indivisualProduct?.img2} alt="" />
                  </div>
                </Flex>
                {/* Thumbnail Images */}
                <Flex h="20%" justify="space-between">
                  {[indivisualProduct?.img2, indivisualProduct?.img3, indivisualProduct?.img4, indivisualProduct?.img5].map((img, index) => (
                    <Flex
                      key={index}
                      overflow="hidden"
                      className={`img${index + 1}`}
                      border="1.5px solid #e5e5e5"
                      borderRadius="md"
                      w="23%"
                      cursor="pointer"
                    >
                      <Image
                        w="75%"
                        transition="all 0.4s ease"
                        _hover={{ transform: "scale(1.2)", transition: "all 0.4s ease" }}
                        src={img}
                      />
                    </Flex>
                  ))}
                </Flex>
                {/* Share Icon */}
                <Button
                  aria-label="Share"
                  isRound="true"
                  position="absolute"
                  size="sm"
                  bottom="90"
                  right="2"
                  icon={<FaShareAlt color="gray" />}
                  boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  transition="all 0.4s ease"
                  _hover={{ transform: "scale(1.2)", transition: "all 0.4s ease" }}
                />
              </Flex>

              {/* Product Description */}
              <Box className="description" w="65%" position="relative" textAlign="left" color="#4f585e" py="10px">
                <Text istruncated="true" fontSize="20px" fontWeight="700" noOfLines={1} height="30px">
                  {indivisualProduct?.desc}
                </Text>
                <Text fontSize="14" color="#0f847e" py="6px">
                  Visit {indivisualProduct?.company} Store
                </Text>
                <Flex className="rating" paddingBottom="20px" w="35%" justify="space-between" align="center">
                  <Flex color="#ffd344" fontSize="20px" align="center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <TiStarHalfOutline fontSize="24px" />
                    <FaRegStar />
                  </Flex>
                  <Text color="#8e9ca7" fontSize="14px">
                    ({indivisualProduct?.ratings} ratings)
                  </Text>
                </Flex>
                <Flex className="price" h="2rem" align="center" w="40%" justify="space-between">
                  <Text fontSize="20px" fontWeight="700">
                    ₹{indivisualProduct?.newPrice}
                  </Text>
                  <Text fontSize="14px" fontWeight="400" color="#8e9ca7">
                    MRP <span style={{ textDecoration: "line-through" }}>₹{indivisualProduct?.originalPrice}</span>{" "}
                  </Text>
                  <Flex align="center" justify="start" px="6px" color="white" fontSize="11px" fontWeight="600" height="72%" w="36%" bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'>
                    {indivisualProduct?.offer}% OFF
                  </Flex>
                </Flex>
                <Text fontSize="10px" color="#8e9ca7">
                  Inclusive of all taxes
                </Text>
                <Text py="10px" fontSize="12px">
                  Delivery by <span style={{ fontWeight: "700" }}>feb 2</span>
                </Text>
                <Link to="/CartProduct">
                <Button
                  className="addToStore"
                  position="absolute"
                  variant="#0f847e"
                  bg="#0f847e"
                  color="white"
                  fontWeight="700"
                  fontSize="16px"
                  right="4"
                  top="28"
                  height="2.8rem"
                  w="9rem"
                  transition="all 0.4s ease"
                  _hover={{ bg: "#129b94", transition: "all 0.4s ease" }}
                >
                  Add To Cart
                </Button>
                </Link>
              </Box>
            </Flex>

            {/* Product Description */}
            <Box textAlign="left" py="30px" color="#4f585e">
              <Text fontSize="16px" fontWeight="700" py="10px">
                Description
              </Text>
              <Text className="desc" fontSize="15px" fontWeight="500" color="#666f75">
                {indivisualProduct?.about}
              </Text>
            </Box>

            {/* Carousels */}
            {/* <SimilarProductCarousal />
            <DealsOfTheDayCarousel /> */}
          </Box>
        </div>

        {/* Right Sidebar */}
        <Box className="right" w="25%" color="#4f585e" textAlign="left">
          {/* Product Details */}
          <Box h="102px" border="1.5px solid #74777a" borderRadius="lg" position="relative" p="8px">
            <Text fontSize="17px" fontWeight="700" noOfLines={1} height="30px">
              {indivisualProduct?.desc}
            </Text>
            <Flex className="price" h="2rem" align="center" w="60%" marginTop="20px" justify="space-between">
              <Text fontSize="16px" fontWeight="700">
                ₹{indivisualProduct?.newPrice}
              </Text>
              <Text fontSize="13px" fontWeight="400" color="#8e9ca7">
                MRP <span style={{ textDecoration: "line-through" }}>₹{indivisualProduct?.originalPrice}</span>{" "}
              </Text>
              <Flex align="center" justify="start" px="6px" color="white" fontSize="11px" fontWeight="600" height="60%" w="36%" bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'>
                {indivisualProduct?.offer}% OFF
              </Flex>
            </Flex>
            <Button
              className="addToStore"
              position="absolute"
              variant="#0f847e"
              bg="#0f847e"
              color="white"
              fontWeight="700"
              fontSize="16px"
              right="4"
              top="12"
              height="2.4rem"
              w="5.5rem"
              transition="all 0.4s ease"
              _hover={{ bg: "#09958e", transition: "all 0.4s ease" }}
            >
              Add
            </Button>
          </Box>

          {/* Cart Details */}
          <Box className="cartDetails" padding="10px 0">
            <Text fontSize="16" fontWeight="600" py="30px">
              0 Items in Cart
            </Text>
            <Link to="/cart">
              <Button
                className="viewCart"
                variant="#0f847e"
                bg="#0f847e"
                color="white"
                fontWeight="700"
                h="3rem"
                fontSize="16px"
                transition="all 0.4s ease"
                borderRadius="md"
                w="100%"
                display="flex"
                align="center"
                _hover={{ bg: "#075854", transition: "all 0.4s ease" }}
              >
                View Cart <BiChevronRight fontSize="25px" />
              </Button>
            </Link>
          </Box>

          {/* Offers */}
          <Box className="offers" marginY="50px">
            <Flex justify="space-between" align="center" py="20px">
              <Text fontSize="14px" fontWeight="700">
                Offers
              </Text>
              <Text fontSize="12px" fontWeight="700" color="#0f847e" cursor="pointer">
                View All
              </Text>
            </Flex>
            <Flex color="#4abd9e" align="center" fontSize="12px" fontWeight="600">
              <FcApproval fontSize="16px" />&nbsp; &nbsp;Father's Day Sale is LIVE!
            </Flex>
            <Flex color="#4abd9e" align="center" fontSize="12px" fontWeight="600">
              <FcApproval fontSize="16px" />&nbsp; &nbsp;Get extra 5% off on OneTouch products.
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* Additional Components */}
      {/* <StatisticsAllCatagory /> */}
    </Box>
  );
};

export default SingleProduct;
