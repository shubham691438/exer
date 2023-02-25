import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { exerciseOptions,fetchData } from "../utils/fetchData";

const BodyPart = ({ item, setBodyPart, bodyPart,setExercises}) => {
  

  const handleClick=()=>{
    const fetchBodyParts=async ()=>{
      
      const url='https://exercisedb.p.rapidapi.com/exercises/bodyPart/'+bodyPart;
     
      const bodyParts=await fetchData(url,exerciseOptions);
      console.log(bodyParts)
      // setExercises(bodyParts);
    }
    fetchBodyParts();
  }
  
  return (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: " 6px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
    }
    onClick={()=>{
      setBodyPart(item);
      handleClick();
      window.scrollTo({top:1355,behaviour:'smooth'})
      
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
)};

export default BodyPart;
