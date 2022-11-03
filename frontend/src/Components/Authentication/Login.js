import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Toast = useToast();
  const handleLoginSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      Toast({
        title: "Email/password field cannot be empty",
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
        "/api/user/login",
        { email, password },
        config
      );
      Toast({
        title: "Login successful",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      console.log(error);
      Toast({
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <VStack spacing="15px">
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            placeholder="Eg - xyz@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            _focus={{
              boxShadow: "inherit",
              borderColor: "var(--orangeColor)",
            }}
            _placeholder={{ color: "var(--textColor)" }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="Enter a strong password"
              _placeholder={{ color: "var(--textColor)" }}
              onChange={(e) => setPassword(e.target.value)}
              _focus={{
                boxShadow: "inherit",
                borderColor: "var(--orangeColor)",
              }}
            />
            <InputRightElement width="3.5rem">
              <Button
                size="sm"
                onClick={handleShowPassword}
                background="transparent"
                height="fit-content"
                p="5px 10px 5px 10px"
                mr="7px"
                _hover={{ background: "var(--blackColor)" }}
              >
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          width="100%"
          background="var(--orangeColor)"
          color="var(--darkTextColor)"
          _hover={{ background: "var(--darkOrangeColor)" }}
          onClick={handleLoginSubmit}
          isLoading={loading}
        >
          LOGINN
        </Button>
        <Box display="flex" flexDirection="row-reverse" width="100%">
          <Button
            variant="link"
            color="var(--darkTextColor)"
            onClick={() => {
              setEmail("guest@gmail.com");
              setPassword("123456");
            }}
          >
            GUEST USER
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default Login;
