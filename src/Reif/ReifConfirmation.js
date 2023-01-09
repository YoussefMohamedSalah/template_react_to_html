import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Iframe from "react-iframe";

const ReifConfirmation = () => {
  const styles = {
    paperContainer: {
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundImage: `url(${"https://i.ibb.co/Bfyq9mV/reif-reservation2-min.jpg"})`
    }
  };

  let customerName = "Youssef",
    numberOfGuests = 6,
    reservationTime = "7:00 pm on Friday, 3 January 2020";

  return (
    <Grid container direction="row">
      {/* first Grid for Image on the left side */}
      <Grid item xs={2} md={2} lg={2} xl={2}>
        <Box style={styles.paperContainer} />
      </Grid>
      {/* second Grid for info and map */}
      <Grid item xs={10} md={10} lg={10} xl={10}>
        <Stack
          sx={{
            minHeight: "100vh",
            height: "100%",
            padding: {
              xs: "0rem 1.1rem",
              sm: "0rem 1.5rem",
              md: "0rem 2rem",
              lg: "0rem 2.8rem",
              xl: "0rem 3.5rem"
            }
          }}
        >
          {/* logo box */}
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              paddingTop: {
                xs: "3.4rem",
                sm: "5.5rem",
                md: "3.5rem",
                lg: "6rem",
                xl: "7rem"
              }
            }}
          >
            {/* logo image */}
            <Box
              component="img"
              src="https://i.ibb.co/HnZf7C0/output-onlinepngtools.png"
              alt="logo_Raif"
              sx={{
                width: {
                  xs: "50%",
                  sm: "45%",
                  md: "40%",
                  lg: "35%",
                  xl: "30%"
                }
              }}
            />
          </Stack>

          {/* info text box */}

          <Box
            sx={{
              alignSelf: "center",
              paddingTop: {
                xs: "3rem",
                sm: "3rem",
                md: "2rem",
                lg: "2.8rem",
                xl: "5rem"
              },
              maxWidth: {
                xs: "100%",
                sm: "98%",
                md: "94%",
                lg: "92%",
                xl: "90%"
              }
            }}
          >
            <Typography
              sx={{
                lineHeight: {
                  sx: "1.3",
                  sm: "1.5",
                  md: "1.4",
                  lg: "1",
                  xl: "1.1"
                },
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  lg: "2.2rem",
                  xl: "2.2rem"
                },
                paddingTop: {
                  xs: "0.9rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2.2rem",
                  xl: "1.3rem"
                }
              }}
            >
              Dear {customerName},
            </Typography>
            {/* ---------------------------------------------------------------------------------------------------------------------- */}
            <Typography
              sx={{
                lineHeight: {
                  sx: "1.3",
                  sm: "1.5",
                  md: "1.4",
                  lg: "1",
                  xl: "1.1"
                },
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2.1rem",
                  xl: "2.1rem"
                },
                paddingTop: {
                  xs: "0.8rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  lg: "2.2rem",
                  xl: "1.3rem"
                }
              }}
            >
              {" "}
              Thank you for booking at Reif Kushiyaki Cairo!
            </Typography>
            {/* ---------------------------------------------------------------------------------------------------------------------- */}
            <Typography
              sx={{
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
                  lg: "2.1rem",
                  xl: "2.1rem"
                },
                paddingTop: {
                  xs: "0.9rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  lg: "2.2rem",
                  xl: "1rem"
                }
              }}
            >
              This message is to reconfirm your reservation for {numberOfGuests}{" "}
              at {reservationTime}.
            </Typography>
            {/* ---------------------------------------------------------------------------------------------------------------------- */}
            <Typography
              sx={{
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
                  lg: "2.1rem",
                  xl: "2.1rem"
                },
                paddingTop: {
                  xs: "0.9rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  lg: "2.2rem",
                  xl: "1.5rem"
                }
              }}
            >
              If you wish to make any special requests or changes to your
              reservation, please contact us on{" "}
              <a
                style={{ color: "#4f5cd6", textDecoration: "underline" }}
                href="tel:0128 044 6862"
              >
                0128 044 6862
              </a>{" "}
              or via email at{" "}
              <a
                style={{ color: "#4f5cd6", textDecoration: "underline" }}
                href="mailto:cairo@reifkushiyaki.com"
              >
                cairo@reifkushiyaki.com
              </a>
            </Typography>
            {/* ---------------------------------------------------------------------------------------------------------------------- */}
            <Typography
              sx={{
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
                  lg: "2.1rem",
                  xl: "2.1rem"
                },
                paddingTop: {
                  xs: "0.9rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  lg: "2.2rem",
                  xl: "1.5rem"
                }
              }}
            >
              We look forward to seeing you!
              <br />
              The Reif Kushiyaki Cairo team
            </Typography>
            {/* ---------------------------------------------------------------------------------------------------------------------- */}
            <Typography
              sx={{
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
                  lg: "2.1rem",
                  xl: "2.1rem"
                },
                paddingTop: {
                  xs: "1.9rem",
                  sm: "2.5rem",
                  md: "1.8rem",
                  lg: "3.2rem",
                  xl: "2.5rem"
                }
              }}
            >
              To reconfirm your booking, please click on the button below.
            </Typography>
            {/* ---------------------------------------------------------------------------------------------------------------------- */}
          </Box>

          {/* Re-confirm button */}
          <a
            href="https://web.facebook.com/shinkocairo/?_rdc=1&_rdr"
            target="_blank"
            rel="noreferrer"
          >
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
                  backgroundColor: "black",
                  borderRadius: "14px",
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
            {/* ----------------------------------------------------------- */}
            <Stack
              direction="column"
              sx={{
                padding: {
                  xs: "0rem 0rem 1rem 0rem",
                  sm: "0rem 0rem 1rem 0rem",
                  md: "0rem 1rem",
                  lg: "0rem 1rem",
                  xl: "0rem 5.5rem"
                }
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                p={1}
                gap={2}
              >
                <Typography
                  sx={{
                    minWidth: {
                      xs: "10rem",
                      sm: "22rem",
                      md: "35rem",
                      lg: "45rem",
                      xl: "56rem"
                    },
                    fontWeight: "700",
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.3rem",
                      md: "2rem",
                      lg: "2rem",
                      xl: "1.3rem"
                    },
                    padding: {
                      xs: "0.5rem 0rem",
                      sm: "1rem 0rem",
                      md: "1rem 0rem",
                      lg: "1rem 0rem",
                      xl: "1rem 0rem"
                    }
                  }}
                >
                  Find us here
                </Typography>
                {/* Social Media Links */}
                <Box
                  sx={{
                    alignSelf: "right",
                    padding: {
                      xs: "0.5rem 0rem",
                      sm: "1rem 0rem",
                      md: "1rem 0rem",
                      lg: "1rem 0rem",
                      xl: "1rem 0rem"
                    }
                  }}
                >
                  <a
                    href="https://web.facebook.com/shinkocairo/?_rdc=1&_rdr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      component="img"
                      src="https://i.ibb.co/9tdjnt5/facebook.png"
                      alt="facebook"
                      sx={{
                        width: {
                          xs: "2rem",
                          sm: "2.3rem",
                          md: "2.8rem",
                          lg: "3rem",
                          xl: "3rem"
                        }
                      }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/shinkocairo/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      component="img"
                      src="https://i.ibb.co/zSwqxzg/instagram.png"
                      alt="instagram"
                      sx={{
                        width: {
                          xs: "2rem",
                          sm: "2.3rem",
                          md: "2.8rem",
                          lg: "3rem",
                          xl: "3rem"
                        }
                      }}
                    />
                  </a>
                </Box>
              </Stack>
              {/* ------#######--------######--------#######------######------ */}
              <Box>
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.218974658328!2d31.32246836546453!3d30.087914423471855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e26a870f6b7%3A0xf0688ccb9bacc1ad!2sSACHI%20Heliopolis!5e0!3m2!1sen!2seg!4v1672714341838!5m2!1sen!2seg"
                  width="100%"
                  height="350px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                />
              </Box>
            </Stack>
            {/* ----------------------------------------------------------- */}
          </Box>
          {/* view Our policy here */}
          <Typography
            sx={{
              alignSelf: "center",
              paddingTop: {
                xs: "0.6rem",
                sm: "1rem",
                md: "2rem",
                lg: "2.2rem",
                xl: "2.5rem"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.3rem",
                md: "1.3rem",
                lg: "1.2rem",
                xl: "1.2rem"
              }
            }}
          >
            5A By The Waterway, New Cairo
          </Typography>
          {/* ----- */}
          <Typography
            sx={{
              alignSelf: "center",
              paddingTop: {
                xs: "1rem",
                sm: "1rem",
                md: "2rem",
                lg: "2.2rem",
                xl: "1.5rem"
              },
              paddingBottom: {
                xs: "1.8rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.2rem",
                xl: "3rem"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.3rem",
                md: "1.3rem",
                lg: "1.2rem",
                xl: "1.2rem"
              }
            }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: "#4f5cd6", textDecoration: "underline" }}
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.218974658328!2d31.32246836546453!3d30.087914423471855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e26a870f6b7%3A0xf0688ccb9bacc1ad!2sSACHI%20Heliopolis!5e0!3m2!1sen!2seg!4v1672714341838!5m2!1sen!2seg"
            >
              CLICK HERE TO VIEW MAP ONLINE
            </a>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ReifConfirmation;
