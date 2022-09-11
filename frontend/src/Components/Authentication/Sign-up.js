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
} from "@chakra-ui/react";
import {
  CloseIcon,
  SmallCloseIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [picture, setPicture] = useState(null);

  const ref = useRef();

  const clearInput = () => {
    ref.current.value = "";
  };

  const handleClick = () => setShowPassword(!showPassword);

  const postDetails = (picture) => {
    setPicture(picture);
  };

  const handleSignUpSubmit = () => { };
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
        >
          SIGN-UP
        </Button>
      </VStack>
    </>
  );
};

export default SignUp;
