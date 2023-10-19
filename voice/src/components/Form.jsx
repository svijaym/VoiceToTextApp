import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import { Box, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import axios from "axios";
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
      .post("dummyurl", formData)
      .then((response) => {
        console.log("Form submitted successfully", response.data);
      })
      .catch((error) => {
        console.error("Form submission failed", error);
      });
  };

  return (
    <div>
      <Box
        width="50%"
        m="auto"
        border="1px solid black"
        p="20px"
        marginTop="50px"
      >
        <div>
          <FormLabel>First Name</FormLabel>
          <br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <button onClick={handleRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          <div>{isRecording ? "Listening..." : "Not Listening"}</div>
        </div>
        <div>
          <FormLabel>Last Name</FormLabel>
          <br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          <button onClick={handleRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          <div>{isRecording ? "Listening..." : "Not Listening"}</div>
        </div>
        <div>
          <FormLabel>State</FormLabel>
          <br />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="State"
          />
          <button onClick={handleRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          <div>{isRecording ? "Listening..." : "Not Listening"}</div>
        </div>
        <div>
          <FormLabel>District</FormLabel>
          <br />
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            placeholder="District"
          />
          <button onClick={handleRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          <div>{isRecording ? "Listening..." : "Not Listening"}</div>
        </div>
        <div>
          <FormLabel>Village</FormLabel>
          <br />
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={handleInputChange}
            placeholder="Village"
          />
          <button onClick={handleRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          <div>{isRecording ? "Listening..." : "Not Listening"}</div>
        </div>
        <div>
          <FormLabel>PAN Number</FormLabel>
          <br />
          <input
            type="number"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleInputChange}
            placeholder="PAN Number"
          />
          <button onClick={handleRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          <div>{isRecording ? "Listening..." : "Not Listening"}</div>
        </div>
        <div>
          <FormLabel>Aadhaar Number</FormLabel>
          <br />
          <input
            type="number"
            name="aadhaarNumber"
            value={formData.aadhaarNumber}
            onChange={handleInputChange}
            placeholder="Aadhaar Number"
          />
          <button onClick={handleRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          <div>{isRecording ? "Listening..." : "Not Listening"}</div>
        </div>
        <Button mt={4} colorScheme="teal" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Form;
