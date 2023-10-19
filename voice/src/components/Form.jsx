import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import { Box, FormLabel, Input, Text, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { BsMic } from "react-icons/bs";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    district: "",
    village: "",
    panNumber: "",
    aadhaarNumber: "",
  });
  const [isRecording, setIsRecording] = useState(false);
  const { transcript, listening, startListening, stopListening } =
    useSpeechRecognition();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecording = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
    setIsRecording(!listening);
  };

  const handleSubmit = () => {
    axios
      .post("eqres.in/api/register", formData)
      .then((response) => {
        console.log("Form submitted successfully", response.data);
      })
      .catch((error) => {
        console.error("Form submission failed", error);
      });
  };

  return (
    <div>
      <Text fontSize="22px" fontWeight="700">
        click on start button to record response
      </Text>
      <Box
        width="40%"
        m="auto"
        border="2px solid teal"
        borderRadius="10px"
        p="20px"
        marginTop="50px"
      >
        <div>
          <FormLabel>First Name</FormLabel>
          <br />
          <Flex>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
            <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
            <Button onClick={handleRecording}>
              <BsMic />
            </Button>
          </Flex>
          <Text>{isRecording ? "Listening..." : "Not Listening"}</Text>
        </div>
        <div>
          <FormLabel>Last Name</FormLabel>
          <br />
          <Flex>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
            <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
            <Button onClick={handleRecording}>
              <BsMic />
            </Button>
          </Flex>
          <Text>{isRecording ? "Listening..." : "Not Listening"}</Text>
        </div>
        <div>
          <FormLabel>State</FormLabel>
          <br />
          <Flex>
            <Input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
            />
            <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
            <Button onClick={handleRecording}>
              <BsMic />
            </Button>
          </Flex>
          <Text>{isRecording ? "Listening..." : "Not Listening"}</Text>
        </div>
        <div>
          <FormLabel>District</FormLabel>
          <br />
          <Flex>
            <Input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              placeholder="District"
            />
            <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
            <Button onClick={handleRecording}>
              <BsMic />
            </Button>
          </Flex>
          <Text>{isRecording ? "Listening..." : "Not Listening"}</Text>
        </div>
        <div>
          <FormLabel>Village</FormLabel>
          <br />
          <Flex>
            <Input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleInputChange}
              placeholder="Village"
            />
            <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
            <Button onClick={handleRecording}>
              <BsMic />
            </Button>
          </Flex>
          <Text>{isRecording ? "Listening..." : "Not Listening"}</Text>
        </div>
        <div>
          <FormLabel>PAN Number</FormLabel>
          <br />
          <Flex>
            <Input
              type="number"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleInputChange}
              placeholder="PAN Number"
            />
            <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
            <Button onClick={handleRecording}>
              <BsMic />
            </Button>
          </Flex>
          <Text>{isRecording ? "Listening..." : "Not Listening"}</Text>
        </div>
        <div>
          <FormLabel>Aadhaar Number</FormLabel>
          <br />
          <Flex>
            <Input
              type="number"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleInputChange}
              placeholder="Aadhaar Number"
            />
            <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
            <Button onClick={handleRecording}>
              <BsMic />
            </Button>
          </Flex>
          <Text>{isRecording ? "Listening..." : "Not Listening"}</Text>
        </div>
        <Button mt={4} colorScheme="teal" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Form;
