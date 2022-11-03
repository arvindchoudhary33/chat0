import React, { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import {
  CloseIcon,
  SmallCloseIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const ref = useRef();
  const navigate = useNavigate();

  const clearInput = () => {
    ref.current.value = "";
  };

  const handleClick = () => setShowPassword(!showPassword);

  const postDetails = (picture) => {
    setLoading(true);
    if (picture === undefined) {
      toast({
        title: "Select an image",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (picture.type === "image/jpeg" || picture.type === "image/png") {
      const data = new FormData();
      data.append("file", picture);
      data.append("upload_preset", "chat-demo");
      data.append("cloud_name", "rahulsharma33");
      fetch("https://api.cloudinary.com/v1_1/rahulsharma33/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPicture(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Select an image",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };

  const handleSignUpSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Fill all the required fields",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(true);
      return;
    }
    if (password != confirmPassword) {
      toast({
        title: "Password & confirm password don't watch",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, picture },
        config
      );
      toast({
        title: "Registration successful",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/chats");
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error occured",
        description: error.response.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <>
      <VStack spacing="15px">
        <FormControl isRequired>
          <FormLabel display="flex">Name</FormLabel>
          <Input
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            _placeholder={{ color: "var(--textColor)" }}
            _focus={{ boxShadow: "inherit", borderColor: "var(--orangeColor)" }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email id"
            onChange={(e) => setEmail(e.target.value)}
            _placeholder={{ color: "var(--textColor)" }}
            _focus={{ boxShadow: "inherit", borderColor: "var(--orangeColor)" }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter a password"
              onChange={(e) => setPassword(e.target.value)}
              _placeholder={{ color: "var(--textColor)" }}
              _focus={{
                boxShadow: "inherit",
                borderColor: "var(--orangeColor)",
              }}
            />
            <InputRightElement width="3.5rem">
              <Button
                size="sm"
                onClick={handleClick}
                height="fit-content"
                mr="7px"
                p="5px 10px 5px 10px"
                color="var(--darkTextColor)"
                bg="transparent"
                _hover={{ background: "var(--blackColor)" }}
              >
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              _placeholder={{ color: "var(--textColor)" }}
              _focus={{
                boxShadow: "inherit",
                borderColor: "var(--orangeColor)",
              }}
            />
            <InputRightElement width="3.5rem">
              <Button
                size="sm"
                onClick={handleClick}
                height="fit-content"
                mr="7px"
                p="5px 10px 5px 10px"
                color="var(--darkTextColor)"
                bg="transparent"
                _hover={{ background: "var(--blackColor)" }}
              >
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>
            Upload your avatar (<i>Optional</i>)
          </FormLabel>
          <InputGroup>
            <Input
              type="file"
              p={1.5}
              accept="image/"
              onChange={(e) => postDetails(e.target.files[0])}
              ref={ref}
            />
            <InputRightElement>
              <Button
                size="sm"
                bg="transparent"
                color="var(--darkTextColor)"
                mr="7px"
                p="0"
                _hover={{ background: "var(--blackColor)" }}
                onClick={clearInput}
              >
                <CloseIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          width="100%"
          background="var(--orangeColor)"
          color="var(--darkTextColor)"
          mt="15px"
          _hover={{ background: "var(--darkOrangeColor)" }}
          onClick={handleSignUpSubmit}
          isLoading={loading}
        >
          SIGN-UP
        </Button>
      </VStack>
    </>
  );
};

export default SignUp;
