import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Iframe from "react-iframe";

const KazoukoConfirmation = () => {
  const styles = {
    paperContainer: {
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundImage: `url(${"https://i.ibb.co/3FrHXVv/kazoku-confirmation-cropped.jpg"})`
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
        color: "black",
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
            xs: "3rem",
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
          src="https://i.ibb.co/Q64sWSQ/Transparent-Kazoku.png"
          alt="logo_kazouko"
          sx={{
            width: {
              xs: "55%",
              sm: "50%",
              md: "45%",
              lg: "20%",
              xl: "20%"
            }
          }}
        />
      </Stack>

      {/* info text box */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
          {customerName},
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
          Thank you for choosing KAZOKU
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
          Kindly re-confirm your reservation for {numberOfGuests} guests at{" "}
          {time} on {date}.
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
          For any special requests or changes to your booking please contact us
          on{" "}
          <a
            style={{ color: "#4f5cd6", textDecoration: "underline" }}
            href="tel:0127 000 4877"
          >
            0127 000 4877
          </a>{" "}
          or via email at{" "}
          <a
            style={{ color: "#4f5cd6", textDecoration: "underline" }}
            href="mailto:reservations@kazokuegypt.com"
          >
            reservations@kazokuegypt.com
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
          We look forward to having you.
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
          Arigato,
          <br />
          The KAZOKU team.{" "}
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
            src="https://i.postimg.cc/RC2dgLRn/Untitled-2-03.png"
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
              Find us here
            </Typography>
            {/* Social Media Links */}
            <Box sx={{ padding: "1rem 0.7rem" }}>
              <a
                href="https://www.facebook.com/kazokuEgypt"
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
                  src="https://i.postimg.cc/MKcHtyGN/Untitled-2-05.png"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/kazokuEgypt/?hl=en"
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
                  src="https://i.postimg.cc/qgfT16bH/Untitled-2-04.png"
                  alt="instagram"
                />
              </a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g13074027-d9729486-Reviews-Kazoku-New_Cairo_City_Cairo_Governorate.html">
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
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14583d56794c16db:0xf741edf9e8b2b703?source=g.page.share"
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
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.151059422861!2d31.437028200000004!3d30.0612042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d56794c16db%3A0xf741edf9e8b2b703!2sKazoku!5e0!3m2!1sen!2seg!4v1672713882563!5m2!1sen!2seg"
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
          href="https://www.kazokuegypt.com/"
        >
          kazokuegypt.com
        </a>
      </Typography>
      <Typography
        sx={{
          alignSelf: "start",
        
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
          style={{ color: "#6e6565e3", textDecoration: "none" }}
          href="https://www.anyware.software/"
        >
          Powered by <i class="far fa-copyright" /> Anyware software
        </a>
      </Typography>
    </Stack>
  );
};

export default KazoukoConfirmation;
