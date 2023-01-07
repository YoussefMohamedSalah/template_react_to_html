import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Iframe from "react-iframe";

const ShinkoConfirmation = () => {
  const styles = {
    paperContainer: {
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundImage: `url(${"https://i.ibb.co/p3BPr61/SHINKO-RESERVATION-LETTER-03-min.jpg"})`
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
        color: "white",
        minHeight: "100vh",
        height: "100%",
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
          src="https://i.ibb.co/fd78MFT/f3847d-150e2ea599f64bdfba33608ce44531ce-mv2.png"
          alt="logo_shinko"
          sx={{
            width: {
              xs: "55%",
              sm: "50%",
              md: "45%",
              lg: "40%",
              xl: "35%"
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
          Your reservation at SHINKŌ has been confirmed!
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
            href="tel:0128 277 5177"
          >
            0128 277 5177
          </a>{" "}
          or via email at{" "}
          <a
            style={{ color: "#4f5cd6", textDecoration: "underline" }}
            href="mailto:reservations@shinkocairo.com"
          >
            reservations@shinkocairo.com
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
          We look forward to having you.
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
          Regards,
          <br />
          The SHINKŌ team.{" "}
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
                xl: "13rem"
              },
              paddingTop: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3rem",
                xl: "3.1rem"
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
                }
              }}
            >
              Find us here
            </Typography>
            {/* Social Media Links */}
            <Box sx={{ padding: "1rem 0.7rem" }}>
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "5px",
                    marginRight: "0.5rem"
                  }}
                  src="https://i.ibb.co/9tdjnt5/facebook.png"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/shinkocairo/?hl=en"
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
                  alt="instagram"
                />
              </a>
              <a href="https://www.tripadvisor.com/RSManagementCenter-d9729486-Kazoku">
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "5px",
                    marginRight: "0.5rem"
                  }}
                  src="https://i.ibb.co/2k7GJtV/owl.png"
                  alt=""
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
              Swanlake Compound, 1st Settlement, New Cairo, Cairo Governorate
            </Typography>
            <Box
              component="a"
              target="_blank"
              href="https://goo.gl/maps/puPXPYdKrmKZTEhBA"
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
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1217676634164!2d31.435657415463986!3d30.062043924695207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d57ab387fc7%3A0xf209f87d4dabcd7f!2sSHINK%C5%8C%20Cairo!5e0!3m2!1sen!2seg!4v1672715014755!5m2!1sen!2seg"
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
      <Typography
        sx={{
          alignSelf: "center",
          paddingTop: {
            xs: "1.1rem",
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
        view our policy here:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: "#4f5cd6", textDecoration: "underline" }}
          href="https://www.shinkocairo.com/"
        >
          shinkocairo.com
        </a>
      </Typography>
    </Stack>
  );
};

export default ShinkoConfirmation;
