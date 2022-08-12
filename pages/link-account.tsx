import React from "react";
import { NextPage } from "next";
import { Box, Button, Typography } from "@mui/material";

const LinkAccount: NextPage = () => {
  return (
    <Box
      maxWidth={"1274px"}
      paddingX={
          {
            xs: "16px",
            md: "16px",
            lg: "24px",
            xl: "36px",
          }
      }
      width={"100%"}
      margin={"0 auto"}
      paddingTop="70px"
      paddingBottom="35px"
      borderRadius={'30px'}
      boxShadow="0px 4.52673px 22.6336px rgba(31, 52, 71, 0.11)"
    >
      <Typography
        fontWeight={"700"}
        fontSize={"35px"}
        lineHeight={"110%"}
        color={"#1C2D41"}
        textAlign={"center"}
      >
        Next, we link your account.
      </Typography>
      <Box
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"30px"}
        color={"#1C2D41"}
        lineHeight={"110%"}
      >
        It’s{" "}
        <Typography
          color={"#1C2D41"}
          fontWeight={"700"}
          fontSize={"30px"}
          lineHeight={"110%"}
          display={"inline-block"}
        >
          fast
        </Typography>
        ,{" "}
        <Typography
          color={"#1C2D41"}
          fontWeight={"700"}
          fontSize={"30px"}
          lineHeight={"110%"}
          display={"inline-block"}
        >
          secure
        </Typography>{" "}
        and makes the{" "}
        <Typography
          color={"#1C2D41"}
          fontWeight={"700"}
          fontSize={"30px"}
          lineHeight={"110%"}
          display={"inline-block"}
        >
          approval
        </Typography>{" "}
        process easier
      </Box>
      <Typography
        color="#556172"
        textAlign={"center"}
        fontWeight="500"
        fontSize="19px"
        lineHeight="131%"
        maxWidth="927px"
        margin="0 auto"
        marginTop="20px"
      >
        When you link your account, we can immediately see if you can qualify
        for specific promotional offers with Banks. This is how we ensure we can
        get you the best deal, in the most accurate way.
      </Typography>
      <Box
        bgcolor={"#DEF7E2"}
        display="flex"
        flexDirection={{
            xs: "column",
            sm: "row",
        }}
        gap="26px"
        alignItems={
            {
                xs: "center",
                sm:'end'
            }
        }
        maxWidth="770px"
        margin={"0 auto"}
        marginTop="28px"
        borderRadius={"30px"}
        paddingY="28px"
        paddingX="38px"
      >
        <svg
          width="38"
          height="41"
          viewBox="0 0 38 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8969 0.706174C15.042 0.560664 15.2144 0.445218 15.4043 0.366448C15.5941 0.287678 15.7976 0.247131 16.0031 0.247131C16.2086 0.247131 16.4122 0.287678 16.602 0.366448C16.7918 0.445218 16.9642 0.560664 17.1094 0.706174C20.9844 4.59367 25.2781 6.49992 30.0625 6.49992C30.4769 6.49992 30.8743 6.66455 31.1674 6.95757C31.4604 7.2506 31.625 7.64802 31.625 8.06242V10.878C30.6592 10.3188 29.6007 9.93776 28.5 9.75305V9.56555C23.875 9.21555 19.7031 7.2968 16 3.96555C12.2937 7.2968 8.125 9.21555 3.5 9.56555V17.4405C3.5 21.9218 4.63437 25.453 6.69062 28.203C8.15937 30.1655 10.1906 31.8531 12.875 33.2124V36.6624C4.60625 33.0531 0.375 26.5749 0.375 17.4437V8.06242C0.375 7.64802 0.53962 7.2506 0.832646 6.95757C1.12567 6.66455 1.5231 6.49992 1.9375 6.49992C6.71875 6.49992 11.0125 4.59055 14.8969 0.706174ZM20.6875 18.9999V22.1249H19.125C18.2962 22.1249 17.5013 22.4542 16.9153 23.0402C16.3292 23.6263 16 24.4211 16 25.2499V37.7499C16 38.5787 16.3292 39.3736 16.9153 39.9596C17.5013 40.5457 18.2962 40.8749 19.125 40.8749H34.75C35.5788 40.8749 36.3737 40.5457 36.9597 39.9596C37.5458 39.3736 37.875 38.5787 37.875 37.7499V25.2499C37.875 24.4211 37.5458 23.6263 36.9597 23.0402C36.3737 22.4542 35.5788 22.1249 34.75 22.1249H33.1875V18.9999C33.1875 17.3423 32.529 15.7526 31.3569 14.5805C30.1848 13.4084 28.5951 12.7499 26.9375 12.7499C25.2799 12.7499 23.6902 13.4084 22.5181 14.5805C21.346 15.7526 20.6875 17.3423 20.6875 18.9999ZM23.8125 22.1249V18.9999C23.8125 18.1711 24.1417 17.3763 24.7278 16.7902C25.3138 16.2042 26.1087 15.8749 26.9375 15.8749C27.7663 15.8749 28.5612 16.2042 29.1472 16.7902C29.7333 17.3763 30.0625 18.1711 30.0625 18.9999V22.1249H23.8125ZM26.9375 29.1562C27.5591 29.1562 28.1552 29.4031 28.5948 29.8426C29.0343 30.2822 29.2812 30.8783 29.2812 31.4999C29.2812 32.1215 29.0343 32.7177 28.5948 33.1572C28.1552 33.5967 27.5591 33.8437 26.9375 33.8437C26.3159 33.8437 25.7198 33.5967 25.2802 33.1572C24.8407 32.7177 24.5938 32.1215 24.5938 31.4999C24.5938 30.8783 24.8407 30.2822 25.2802 29.8426C25.7198 29.4031 26.3159 29.1562 26.9375 29.1562Z"
            fill="black"
          />
        </svg>

        <Typography
          color="#556172"
          fontWeight={"500"}
          fontSize="19px"
          lineHeight={"131%"}
          textAlign={
              {
                    xs: "center",
                    sm:'left'
              }
          }
        >
          Bank level, 256-bit encryption ensuring your security, safety and
          privacy.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent="center" marginTop={"43px"}>
        <Button
          sx={{
            backgroundColor: "rgba(45, 202, 115, 0.42)",
            borderRadius: "25px",
            margin: "0 auto",
            border: "0",
            padding: {
                xs:"13px 20px",
                sm:"13px 36px",
            },
            ":hover": {
              backgroundColor: "rgba(0, 202, 115, 0.42)",
            },
          }}
        >
          <Typography fontSize={{
                xs: "14px",
                sm: "25px",
          }} color="#1C2D41" fontWeight={"500"}>
            Click here to link your account
          </Typography>
        </Button>
      </Box>
      <Box marginTop={"30px"} maxWidth="800px" margin={"0 auto"}>
        <Typography
          color="#1C2D41"
          fontSize="19px"
          lineHeight={"110%"}
          textAlign="center"
          marginTop={"30px"}
        >
          We work with over 92 different Financial Institutions in Canada. Click
          to select which Bank your pay / downpayment are deposited.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        margin="0 auto"
        justifyContent={"space-between"}
        marginTop="30px"
        maxWidth={"920px"}
        flexWrap="wrap"
        gap={'20px'}
      >
        <Box
          width={"130px"}
          height="80px"
          bgcolor={"#fff"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius="20px"
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Box component={"img"} alt="logo" src="/images/image-1.png" />
        </Box>
        <Box
          width={"130px"}
          height="80px"
          bgcolor={"#fff"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius="20px"
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Box component={"img"} alt="logo" src="/images/image-2.png" />
        </Box>
        <Box
          width={"130px"}
          height="80px"
          bgcolor={"#fff"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius="20px"
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Box component={"img"} alt="logo" src="/images/image-3.png" />
        </Box>
        <Box
          width={"130px"}
          height="80px"
          bgcolor={"#fff"}
          borderRadius="20px"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Box component={"img"} alt="logo" src="/images/image-4.png" />
        </Box>
        <Box
          width={"130px"}
          height="80px"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"#fff"}
          borderRadius="20px"
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Box component={"img"} alt="logo" src="/images/image-5.png" />
        </Box>
        <Box
          width={"130px"}
          height="80px"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"#fff"}
          borderRadius="20px"
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Box component={"img"} alt="logo" src="/images/image-6.png" />
        </Box>
      </Box>
      <Box
        width={"100%"}
        display="flex"
        gap={'20px'}
        flexDirection={
            {

                    xs: "column",
                    sm:'row'
            }
        }
        justifyContent="space-between"
        alignItems="center"
        marginTop={'62px'}
      >
           <Button
          sx={{
            backgroundColor: "#F4F6F8",
            borderRadius: "12px",
            border: "1px solid #DDE4ED",
            width: {
                xs: "100%",
                sm:"fit-content",
            },
            padding: "22px 29px",
            ":hover": {
              backgroundColor: "#F4F6F0",
            },
          }}
        >
          <Typography fontSize={"15px"}  lineHeight="100%" color="#1D72E8" fontWeight={"700"}>
            Back
          </Typography>
        </Button>
        <Button
          sx={{
            backgroundColor: "#000",
            borderRadius: "12px",
            border: "0",
            padding: "23px 30px",
            ":hover": {
              backgroundColor: "#171717",
            },
            width: {
                xs: "100%",
                sm:"fit-content",
            },
          }}
        >
          <Typography fontSize={"15px"} color="#fff" fontWeight={"700"}>
           Continue to Verification
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LinkAccount;
