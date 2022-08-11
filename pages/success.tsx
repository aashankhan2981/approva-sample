import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import SelectBox from "../component/SelectBox";
import styles from "../styles/Home.module.css";
interface SelectBox {
  amount: string;
  title: string;
}
const Home: NextPage = () => {
  const [stepName, setStepName] = React.useState<string>("3/ 3");
  const [results, setResults] = React.useState<Array<SelectBox>>([
    { amount: "692", title: "Your Credit Score" },
    { amount: "$ 43, 245", title: "Your Total Outstanding Debts" },
    { amount: "$3.265", title: "Your Total Monthly payments" },
  ]);

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
          Great news! You’re verified
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          maxWidth={"753px"}
          marginTop={"13px"}
          textAlign={"center"}
        >
          Please see below for more information about your Credit information.
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
      <Box
        marginTop={"26px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { md: "start", xs: "center" },
        }}
        width={"100%"}
      >
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
            width={"100%"}
          >
            <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={'43px'} >
              {results?.map((result, index) => (
                <Box
                  display={"flex"}
                  maxWidth={"485px"}
                  width={"100"}
                  justifyContent={"space-between"}
                  alignItems="center"
                  key={index}
                  gap={"15px"}
                >
                  <Typography
                    variant="body1"
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"30px"}
                    maxWidth={"308px"}
                    width={"100%"}
                    textAlign={"right"}
                    color="#000000"
                  >
                    {result?.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"30px"}
                    color="#000000"
                    maxWidth={"103px"}
                    width={"100%"}
                    sx={{
                      textAlign: { md: "left", xs: "left" },
                    }}
                  >
                    {result?.amount}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
