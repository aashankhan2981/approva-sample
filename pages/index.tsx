import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import SelectBox from "../component/SelectBox";
import styles from "../styles/Home.module.css";
interface SelectBox {
  checked: boolean;
  title: string;
}
const Home: NextPage = () => {
  const [stepName, setStepName] = React.useState<string>("1/ 3");
  const [selectBoxes, setSelectBoxes] = React.useState<Array<SelectBox>>([
    { checked: true, title: "Royal Bank of Canada" },
    { checked: false, title: "TD Canada Trust" },
    { checked: false, title: "Scotiabank Card Services" },
    { checked: false, title: "None of the above" },
  ]);
  const onClick = (index: number) => {
    const newSelectBoxes = [...selectBoxes];
    const array: any = newSelectBoxes.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }

      return { ...item, checked: false };
    });
    setSelectBoxes(array);
  };
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"center"}
      maxWidth={"1274px"}
      width={"100%"}
      margin={"0 auto"}
      paddingX={"16px"}
    >
      <Box marginTop={"55px"}>
        <Typography
          variant="body1"
          fontWeight={700}
          fontSize={"30px"}
          lineHeight={"33px"}
          color="#1C2D41"
          textAlign={"center"}
        >
          We need to confirm some information
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          maxWidth={"753px"}
          marginTop={"13px"}
          textAlign={"center"}
        >
          There’s only one you - and to ensure accuracy, let’s make sure we have
          the right information. We’ll use it to run a soft credit check that
          won’t affect your score.
        </Typography>
      </Box>
      <Box
        marginTop={"23px"}
        width={"80%"}
        display={"flex"}
        justifyContent="end"
      >
        <Box
          borderRadius={"10px"}
          bgcolor={"rgba(45, 202, 115, 0.14);"}
          paddingY={"8px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingX={"14px"}
        >
          <Typography
            variant="body1"
            fontSize={"18px"}
            fontWeight={"700"}
            lineHeight={"27px"}
            color="rgba(0, 0, 0, 0.44)"
          >
            {stepName}
          </Typography>
        </Box>
      </Box>
      <Box marginTop={"26px"}  sx={{
        display: "flex",
        flexDirection:'column',
            justifyContent: { md: "start", xs: "center" },
          }} maxWidth={"667px"} width={"100%"}>
        <Typography
          variant="body1"
          fontWeight={"400"}
          fontSize={"20px"}
          lineHeight={"30px"}
          color="#000000"
          sx={{
            textAlign: { md: "left",xs:'center' },
            
          }}
        >
          As of March 2022, you current have (1) Credit Card with an outstanding
          balance of $ 12,341.23 at which Financial Institution?
        </Typography>
        <Typography
          variant="body1"
          fontWeight={"400"}
          fontSize={"20px"}
          lineHeight={"30px"}
          color="#000000"
          sx={{
          textAlign: { md: "left",xs:'center' },
            
          }}
        >
          Select one option:
        </Typography>
        <Box
          display={"flex"}
          sx={{
            marginLeft: { md: "130px" },
            justifyContent: { md: "start", xs: "center" },
          }}
        >
          <Box
            marginTop={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"18px"}
            alignItems={"start"}
            maxWidth={"277px"}
          >
            {selectBoxes.map((item, index) => {
              return (
                <Box
                  display={"flex"}
                  gap={"18px"}
                  alignItems={"start"}
                  justifyContent="start"
                >
                  <SelectBox
                    checked={item.checked}
                    onClick={onClick}
                    index={index}
                    key={index}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"30px"}
                    color="#000000"
                  >
                    {item?.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
