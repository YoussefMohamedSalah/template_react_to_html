import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const SachiReservationSt = () => {
  const styles = {
    paperContainer: {
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundImage: `url(${"https://i.postimg.cc/ZKpsrN4x/Background.png"})`
    }
  };

  let customerName = "Youssef Salah",
    numberOfGuests = 6,
    reservationTime = "Sunday, 26th January - 4:00PM - 6:00PM";

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
            lg: "5rem",
            xl: "4rem"
          }
        }}
      >
        {/* logo image */}
        <Box
          component="img"
          src="https://i.postimg.cc/wT4PxzqS/Untitled-2-01.png"
          alt="logo_sachi"
          sx={{
            width: {
              xs: "55%",
              sm: "50%",
              md: "45%",
              lg: "40%",
              xl: "30%"
            }
          }}
        />
      </Stack>
      {/* Banner box */}
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingTop: {
            xs: "3.4rem",
            sm: "5.5rem",
            md: "3.5rem",
            lg: "6rem",
            xl: "4rem"
          }
        }}
      >
        {/* Banner image */}
        <Box
          component="img"
          src="https://i.postimg.cc/1zV8twkD/Untitled-2-02.png"
          alt="sachi_Almaza_Place"
          sx={{
            width: "90%",
            height: "60vh"
          }}
        />
      </Stack>
      {/* ----------------------------------------------info text box----------------------------------------------- */}
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
        {/* ------------------------------------------- */}
        <Box
          sx={{
            paddingTop: {
              xs: "0.5rem",
              sm: "3rem",
              md: "2rem",
              lg: "2.8rem",
              xl: "4rem"
            }
          }}
        >
          {/* -1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1- */}
          <Stack
            direction="row"
            gap={1}
            sx={{
              padding: {
                xs: "0.2rem 0rem"
              }
            }}
          >
            <Box flex={4}>
              <Typography
                sx={{
                  lineHeight: {
                    xs: "1.2",
                    sm: "1.5",
                    md: "1.4",
                    lg: "1",
                    xl: "1.2"
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "1.8rem"
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "1.5rem"
                  }
                }}
              >
                Reservation under:
              </Typography>
            </Box>
            <Box flex={8}>
              <Typography
                sx={{
                  lineHeight: {
                    xs: "1.2",
                    sm: "1.5",
                    md: "1.4",
                    lg: "1",
                    xl: "1.2"
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "1.8rem"
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "1.5rem"
                  }
                }}
              >
                {customerName}
              </Typography>
            </Box>
          </Stack>
          {/* -1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1- */}
          <Stack
            direction="row"
            gap={1}
            sx={{
              padding: {
                xs: "0.3rem 0rem"
              }
            }}
          >
            <Box flex={4}>
              <Typography
                sx={{
                  lineHeight: {
                    xs: "1.2",
                    sm: "1.5",
                    md: "1.4",
                    lg: "1",
                    xl: "1.2"
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "1.8rem"
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "1.5rem"
                  }
                }}
              >
                Date & time:
              </Typography>
            </Box>
            <Box flex={8}>
              <Typography
                sx={{
                  lineHeight: {
                    xs: "1.2",
                    sm: "1.5",
                    md: "1.4",
                    lg: "1",
                    xl: "1.2"
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "1.8rem"
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "1.5rem"
                  }
                }}
              >
                {reservationTime}
              </Typography>
            </Box>
          </Stack>
          {/* 0000000000000000000000000000000000000 */}
          <Stack
            direction="row"
            gap={1}
            sx={{
              padding: {
                xs: "0.3rem 0rem"
              }
            }}
          >
            <Box flex={4}>
              <Typography
                sx={{
                  lineHeight: {
                    xs: "1.2",
                    sm: "1.5",
                    md: "1.4",
                    lg: "1",
                    xl: "1.2"
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "1.8rem"
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "1.5rem"
                  }
                }}
              >
                Number of guests:
              </Typography>
            </Box>
            <Box flex={8}>
              <Typography
                sx={{
                  lineHeight: {
                    xs: "1.2",
                    sm: "1.5",
                    md: "1.4",
                    lg: "1",
                    xl: "1.2"
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "1.8rem"
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "1.5rem"
                  }
                }}
              >
                {numberOfGuests}
              </Typography>
            </Box>
          </Stack>
          {/* ------------------------------------- */}
          <Stack
            direction="row"
            gap={1}
            sx={{
              padding: {
                xs: "0.3rem 0rem"
              }
            }}
          >
            <Box flex={4}>
              <Typography
                sx={{
                  lineHeight: {
                    xs: "1.2",
                    sm: "1.5",
                    md: "1.4",
                    lg: "1",
                    xl: "1.2"
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "1.8rem"
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "1.5rem"
                  }
                }}
              >
                Location:
              </Typography>
            </Box>
            <Box flex={8}>
              <Typography
                sx={{
                  lineHeight: {
                    xs: "1.2",
                    sm: "1.5",
                    md: "1.4",
                    lg: "1",
                    xl: "1.2"
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "1.8rem"
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "1.5rem"
                  }
                }}
              >
                2 Park St., Sheikh Zayed, Giza Governorate <br />
                <Box
                  component="a"
                  target="_blank"
                  href="https://goo.gl/maps/wQKsp886dYK2K3Uo6"
                  sx={{
                    color: "#4f5cd6",
                    textDecoration: "underline",
                    lineHeight: {
                      xs: "1.2",
                      sm: "1.5",
                      md: "1.4",
                      lg: "1",
                      xl: "1.2"
                    },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                      md: "1.4rem",
                      lg: "1.6rem",
                      xl: "1.8rem"
                    },
                    paddingTop: {
                      xs: "0rem",
                      sm: "1.5rem",
                      md: "2rem",
                      lg: "2.2rem",
                      xl: "1.5rem"
                    }
                  }}
                >
                  CLICK HERE TO VIEW MAP ONLINE
                </Box>
              </Typography>
            </Box>
          </Stack>
        </Box>
        {/* 0000000000000000000000000000000000000 */}

        {/* 
-
-
-
-
-
-
-
-
-
-
-
-
-
- */}
        <Box
          sx={{
            paddingTop: {
              xs: "0.8rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.2rem",
              xl: "2.5rem"
            }
          }}
        >
          {/* ------------------------------------------- */}
          <Typography
            sx={{
              lineHeight: {
                xs: "1.15",
                sm: "1.5",
                md: "1.4",
                lg: "1",
                xl: "1.2"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
                xl: "1.8rem"
              },
              paddingTop: {
                xs: "0.6rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "2.2rem",
                xl: "1.5rem"
              }
            }}
          >
            We kindly ask you to follow our House Rules:
          </Typography>
          {/* ---------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              lineHeight: {
                xs: "1.15",
                sm: "1.5",
                md: "1.4",
                lg: "1",
                xl: "1.2"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
                xl: "1.8rem"
              },
              paddingTop: {
                xs: "0.6rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "2.2rem",
                xl: "1.5rem"
              }
            }}
          >
            {" "}
            ??? Age restricition: 21+ after 6PM
          </Typography>
          {/* ---------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              lineHeight: {
                xs: "1.15",
                sm: "1.5",
                md: "1.4",
                lg: "1",
                xl: "1.2"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
                xl: "1.8rem"
              },
              paddingTop: {
                xs: "0.6rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "2.2rem",
                xl: "1.5rem"
              }
            }}
          >
            {" "}
            ??? Dress Code : Smart Casual (Shorts or flip-flops; uniforms or
            athletic sportswear will not be admitted).
          </Typography>
          {/* ---------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              lineHeight: {
                xs: "1.15",
                sm: "1.5",
                md: "1.4",
                lg: "1",
                xl: "1.2"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
                xl: "1.8rem"
              },
              paddingTop: {
                xs: "0.6rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "2.2rem",
                xl: "1.5rem"
              }
            }}
          >
            ??? Guests intoxicated or under the influence of drugs will not be
            allowed entry.
          </Typography>
          {/* ---------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              lineHeight: {
                xs: "1.15",
                sm: "1.5",
                md: "1.4",
                lg: "1",
                xl: "1.2"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
                xl: "1.8rem"
              },
              paddingTop: {
                xs: "0.6rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "2.2rem",
                xl: "1.5rem"
              }
            }}
          >
            ??? Management reserves the right to refuse entry at their own
            discretion.
          </Typography>
          {/* ---------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              lineHeight: {
                xs: "1.15",
                sm: "1.5",
                md: "1.4",
                lg: "1",
                xl: "1.2"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
                xl: "1.8rem"
              },
              paddingTop: {
                xs: "0.6rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "2.2rem",
                xl: "1.5rem"
              }
            }}
          >
            ??? Please arrive on time to secure your reservation. SACHI has a
            30-minute table holding policy.
          </Typography>
          {/* ---------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              lineHeight: {
                xs: "1.15",
                sm: "1.5",
                md: "1.4",
                lg: "1",
                xl: "1.2"
              },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
                xl: "1.8rem"
              },
              paddingTop: {
                xs: "0.6rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "2.2rem",
                xl: "1.5rem"
              }
            }}
          >
            ??? If you wish to make any special requests or changes to your
            reservation, please contact us on{" "}
            <a
              style={{ color: "#4f5cd6", textDecoration: "underline" }}
              href="tel:0127 199 5701"
            >
              0127 199 5701
            </a>{" "}
            or via email at{" "}
            <a
              style={{ color: "#4f5cd6", textDecoration: "underline" }}
              href="mailto:reservations@sachirestaurant.com"
            >
              reservations@sachirestaurant.com
            </a>
          </Typography>
        </Box>
      </Box>
      {/* view Our policy here */}
      <Typography
        sx={{
          alignSelf: "center",
          lineHeight: {
            xs: "1.3",
            sm: "1.5",
            md: "1.4",
            lg: "1",
            xl: "1.2"
          },
          fontSize: {
            xs: "1.3rem",
            sm: "1.5rem",
            md: "2rem",
            lg: "2.2rem",
            xl: "2.3rem"
          },
          paddingTop: {
            xs: "1.2rem",
            sm: "1.5rem",
            md: "2rem",
            lg: "2.2rem",
            xl: "3rem"
          }
        }}
      >
        See you very soon!{" "}
      </Typography>
      <Typography
        sx={{
          alignSelf: "start",
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

export default SachiReservationSt;
