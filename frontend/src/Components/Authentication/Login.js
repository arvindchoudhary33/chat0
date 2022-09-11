import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleLoginSubmit = () => { };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <VStack spacing="15px">
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email id"
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
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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
        >
          LOGIN
        </Button>
        <Box display="flex" flexDirection="row-reverse" width="100%">
          <Button variant="link" color="var(--darkTextColor)" align>
            GUEST USER
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default Login;
