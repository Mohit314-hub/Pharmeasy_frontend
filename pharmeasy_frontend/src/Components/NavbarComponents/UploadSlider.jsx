import {
  // ... other imports
  Input,
  Button,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Image,
  Center,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAuthUser } from "../../Redux/Auth/action";

export default function UploadSlider() {
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const dispatch = useDispatch();

  const onClose = () => {
    setIsOpen(false);
    setShowSuccessPopup(true);

    // Close the success popup after 3 seconds (adjust duration as needed)
    setTimeout(() => setShowSuccessPopup(false), 3000);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      let formData = new FormData();
      formData.append("file", file);
      dispatch(registerAuthUser(formData));
    } else {
      // Handle case when no file is selected
      console.log("Please select a file.");
    }
    // Close the drawer and show success popup
    onClose();
  };

  return (
    <div>
      {/* Upload Section */}
      <Box>
        <Text
          transition="all .4s ease"
          borderBottom="2px solid rgba(16, 132, 126, 0) "
          paddding="2px"
          color="white"
          onClick={() => setIsOpen(true)}
          cursor="pointer"
          _hover={{
            borderBottom: "2px solid white",
            transition: "all .4s ease",
          }}
        >
          Upload
        </Text>
      </Box>

      {/* Upload Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          {/* Banner Section Inside the Slider */}
          <DrawerHeader borderBottomWidth="1px" bg="#0f847e" color="white">
            <Center>
              <Box>
                <Image
                  h="62px"
                  src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                  alt="PharmEasy Logo"
                />
              </Box>
            </Center>

            {/* Margin below the banner */}
            <Box pt={6}>
              <Text fontSize="lg" fontWeight="bold" color="white">
                Upload Prescription
              </Text>
            </Box>
          </DrawerHeader>

          {/* Upload Section Inside the Slider */}
          <DrawerBody>
            <Box>
              <Input
                type="file"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Box>
            <Center mt={4}>
              <Text fontSize="sm" color="gray.500">
                Allowed formats: PDF, PNG, JPG
              </Text>
            </Center>
            <Center mt={4}>
              <Button onClick={handleUpload} colorScheme="teal" size="md">
                Upload
              </Button>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Success Popup */}
      <AlertDialog
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        leastDestructiveRef={undefined}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Success
            </AlertDialogHeader>

            <AlertDialogBody>
              Your order has been placed. Thank you for shopping with us.
            </AlertDialogBody>

            <AlertDialogFooter />
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
