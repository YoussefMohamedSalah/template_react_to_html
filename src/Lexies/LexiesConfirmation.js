import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Iframe from "react-iframe";

const LexiesConfirmation = () => {
  const styles = {
    paperContainer: {
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top right",
      backgroundImage: `url(${"https://i.ibb.co/WcxrjdR/Textured-paper-01.png"})`
    }
  };
  let customerName = "Youssef Salah",
    numberOfGuests = 6,
    // reservationTime = "Sunday, 26th January - 4:00PM - 6:00PM",
    date = "Thursday, 06 May 2021",
    time = "7:00 PM - 12:00 AM";
  return (
    <Stack
      style={styles.paperContainer}
      sx={{
        backgroundImage: "src(https://ibb.co/LZN1sVv)",
        color: "rgb(148 149 147)",
        minHeight: "100vh",
        height: "110%",
        padding: {
          xs: "1.1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.8rem",
          xl: "3.5rem"
        }
      }}
    >
      {/* logo box */}
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={
          {
            // paddingTop: {
            //   // xs: "3rem",
            //   sm: "5.5rem",
            //   md: "3.5rem",
            //   lg: "6rem",
            //   xl: "7rem"
            // }
          }
        }
      >
        {/* logo image */}
        {/* <img src={"https://i.ibb.co/8r5stsb/Vector-01.png"} /> */}
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "24rem",
              sm: "44rem",
              md: "67rem",
              lg: "70rem",
              xl: "113rem"
            },
            height: {
              xs: "18rem",
              sm: "20rem",
              md: "20rem",
              lg: "30rem",
              xl: "22rem"
            },
            overflow: "hidden"
          }}
        >
          <Box
            component="img"
            src="https://i.ibb.co/8r5stsb/Vector-01.png"
            alt="logo_Luxies"
            sx={{
              transform: "translate(-50%, -50%)",
              position: "absolute",
              width: {
                xs: "43rem",
                sm: "44rem",
                md: "46rem",
                lg: "50rem",
                xl: "55rem"
              },
              // position: "absolute",
              left: {
                xs: "80%",
                sm: "80%",
                md: "80%",
                lg: "88%",
                xl: "78%"
              },
              top: {
                xs: "50%",
                sm: "50%",
                md: "50%",
                lg: "67%",
                xl: "50%"
              }
            }}
          />
        </Box>
      </Stack>
      {/* info text box */}

      <Box
        sx={{
          // marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          maxWidth: {
            xs: "100%",
            sm: "98%",
            md: "94%",
            lg: "92%",
            xl: "85%"
          }
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            alignSelf: "center",
            lineHeight: {
              sx: "1.3",
              sm: "1.5",
              md: "1.4",
              lg: "1",
              xl: "1.2"
            },
            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "2.3rem"
            },
            paddingTop: {
              xs: "0.9rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "1.5rem"
            }
          }}
        >
          Dear {customerName},
        </Typography>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <Typography
          sx={{
            textAlign: "center",
            alignSelf: "center",
            lineHeight: {
              sx: "1.3",
              sm: "1.5",
              md: "1.4",
              lg: "1",
              xl: "1.2"
            },
            fontSize: {
              xs: "1.1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "2.3rem"
            },
            paddingTop: {
              xs: "0.8rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "1.5rem"
            }
          }}
        >
          {" "}
          Thank you for reserving at Lexie’s!
        </Typography>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <Typography
          sx={{
            textAlign: "center",
            alignSelf: "center",
            lineHeight: {
              sx: "1.3",
              sm: "1.5",
              md: "1.4",
              lg: "1",
              xl: "1.2"
            },
            fontSize: {
              xs: "1.1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "2.3rem"
            },
            paddingTop: {
              xs: "0.9rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "1.5rem"
            }
          }}
        >
          This message is to re-confirm your reservation for {numberOfGuests}{" "}
          guests at {time} on {date}.
        </Typography>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <Typography
          sx={{
            textAlign: "center",
            alignSelf: "center",
            lineHeight: {
              sx: "1.3",
              sm: "1.5",
              md: "1.4",
              lg: "1",
              xl: "1.2"
            },
            fontSize: {
              xs: "1.1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "2.3rem"
            },
            paddingTop: {
              xs: "0.9rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "1.5rem"
            }
          }}
        >
          If you wish to make any special requests or changes to your
          reservation, please contact us on{" "}
          <a
            style={{ color: "#4f5cd6", textDecoration: "underline" }}
            href="tel:0128 581 8590"
          >
            0128 581 8590
          </a>{" "}
          or via email at{" "}
          <a
            style={{ color: "#4f5cd6", textDecoration: "underline" }}
            href="mailto:reservations@lexiesrestaurant.com"
          >
            reservations@lexiesrestaurant.com
          </a>
        </Typography>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <Typography
          sx={{
            textAlign: "center",
            alignSelf: "center",
            lineHeight: {
              sx: "1.3",
              sm: "1.5",
              md: "1.4",
              lg: "1",
              xl: "1.2"
            },
            fontSize: {
              xs: "1.1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "2.3rem"
            },
            paddingTop: {
              xs: "0.9rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "1.5rem"
            }
          }}
        >
          We look forward to seeing you there!
        </Typography>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}

        <Typography
          sx={{
            textAlign: "center",
            alignSelf: "center",
            lineHeight: {
              sx: "1.3",
              sm: "1.5",
              md: "1.4",
              lg: "1",
              xl: "1.2"
            },
            fontSize: {
              xs: "1.1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "2.3rem"
            },
            paddingTop: {
              xs: "0.9rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "1.5rem"
            }
          }}
        >
          The LEXIE’S team.
        </Typography>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <Typography
          sx={{
            textAlign: "center",
            alignSelf: "center",
            lineHeight: {
              sx: "1.3",
              sm: "1.5",
              md: "1.4",
              lg: "1",
              xl: "1.2"
            },
            fontSize: {
              xs: "1.1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "2.3rem"
            },
            paddingTop: {
              xs: "0.9rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "1.5rem"
            }
          }}
        >
          To re-confirm your booking please click on the link below.
        </Typography>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
      </Box>

      {/* Re-confirm button */}
      <a href="#" target="_blank" rel="noreferrer">
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ minWidth: "100%" }}
        >
          <Box
            component="img"
            src="https://i.ibb.co/S359PQd/reconfirm-btn.png"
            alt="reconfirm_btn"
            sx={{
              alignSelf: "center",

              width: {
                xs: "9rem",
                sm: "9rem",
                md: "11rem",
                lg: "12rem",
                xl: "12rem"
              },
              marginTop: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3rem",
                xl: "3.2rem"
              }
            }}
          />
        </Stack>
      </a>
      {/* Address Info and Map */}
      {/* ----------------------------------------------------------- */}
      <Box
        sx={{
          alignSelf: "center",
          paddingTop: {
            xs: "0.5rem",
            sm: "3rem",
            md: "2rem",
            lg: "2.8rem",
            xl: "4rem"
          }
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            lg={3}
            xl={4}
            sx={{
              padding: {
                xs: "0rem 0rem 1rem 0rem",
                sm: "0rem 0rem 1rem 0rem",
                md: "0rem 1rem",
                lg: "0rem 1rem",
                xl: "0rem 2.5rem"
              }
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.3rem",
                  md: "2rem",
                  lg: "2rem",
                  xl: "1.3rem"
                },
                fontWeight: "bold"
              }}
            >
              WE’RE HERE
            </Typography>
            {/* Social Media Links */}
            <Box sx={{ padding: "1rem 0.7rem" }}>
              <a
                href="https://www.facebook.com/lexiesrestaurant/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "5px",
                    marginRight: "0.5rem",
                    color: "transparent",
                    backgroundColor: "rgb(148 149 147)"
                  }}
                  src="https://i.ibb.co/9tdjnt5/facebook.png"
                  alt="lexiesrestaurant"
                />
              </a>
              <a
                href="https://www.instagram.com/lexiesrestaurant/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "5px",
                    marginRight: "0.5rem"
                  }}
                  src="https://i.ibb.co/zSwqxzg/instagram.png"
                  alt="lexiesrestaurant"
                />
              </a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g13074027-d15656944-Reviews-LEXIE_S-New_Cairo_City_Cairo_Governorate.html">
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "5px",
                    marginRight: "0.5rem"
                  }}
                  src="https://i.ibb.co/2k7GJtV/owl.png"
                  alt="lexiesrestaurant"
                />
              </a>
            </Box>

            <Typography
              sx={{
                paddingBottom: "1rem",
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.3rem",
                  md: "1.3rem",
                  lg: "1.2rem",
                  xl: "1.2rem"
                }
              }}
            >
              El-Tessen street, Lakeview, Cairo Governorate 11835
            </Typography>
            <Box
              component="a"
              target="_blank"
              href="https://goo.gl/maps/51rHvXWPJX9XWxQf6"
              sx={{
                color: "#4f5cd6",
                textDecoration: "underline"
              }}
            >
              CLICK HERE TO VIEW MAP ONLINE
            </Box>
          </Grid>
          {/* ------#######--------######--------#######------######------ */}
          <Grid item xs={12} md={9} lg={9} xl={8}>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.434740365906!2d31.456206284536467!3d30.024383226474207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823bb7a508d05%3A0x7c4ddf4f6e525b76!2sLexie&#39;s!5e0!3m2!1sar!2seg!4v1674136755198!5m2!1sar!2seg"
              width="100%"
              height="350px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </Grid>
        </Grid>
      </Box>

      {/* ----------------------------------------------------------- */}
      {/* view Our policy here */}
      <Box
        component="img"
        src="https://i.ibb.co/myfM4RC/i3-Id17s-IQzy8obbwhw-Ua-Shinko-Logo-06-1.png"
        alt="logo_Luxies"
        sx={{
          alignSelf: "center",
          marginTop: {
            xs: "-2rem",
            sm: "-2.5rem",
            md: "-3rem",
            lg: "-3.5rem",
            xl: "-4rem"
          },
          marginBottom: {
            xs: "-1rem",
            sm: "-1.6rem",
            md: "-2rem",
            lg: "-2.7rem",
            xl: "-4rem"
          },
          width: {
            xs: "10rem",
            sm: "12rem",
            md: "14rem",
            lg: "16rem",
            xl: "18rem"
          }
        }}
      />
    </Stack>
  );
};

export default LexiesConfirmation;
// alignSelf: "center",
//           marginTop: "-4rem",
//           marginBottom: "-3rem",
//           width: "20rem"
