import React from "react";
import "../index.css";

const KazoukoReservation = () => {
  let customerName = "Youssef Salah",
    numberOfGuests = 6,
    // reservationTime = "Sunday, 26th January - 4:00PM - 6:00PM",
    date = "Thursday, 06 May 2021",
    time = "7:00 PM - 12:00 AM";

  return (
    <div
      className="paperContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <div className="bannerBox">
          <img
            className="diningAreaImage"
            src="https://i.ibb.co/Kh4Lb9g/Kazoku-Dining-Area.jpg"
            alt="Kazouko_Dining_Area"
          />
        </div>
        <div className="InfoTextBox">
          <div className="bookingInfoSection">
            <div className="individualBookingDataRow customerName-row">
              <div className="booking-key-info">
                <p className="booking-key-info-text">
                  Reservation Name:&nbsp;&nbsp;&nbsp;
                </p>
              </div>
              <div className="booking-value-info">
                <p className="booking-value-info-text">{customerName}</p>
              </div>
            </div>
            <div className="individualBookingDataRow date-row">
              <div className="booking-key-info">
                <p className="booking-key-info-text">Date:&nbsp;&nbsp;&nbsp;</p>
              </div>
              <div className="booking-value-info">
                <p className="booking-value-info-text">{date}</p>
              </div>
            </div>
            <div className="individualBookingDataRow time-row">
              <div className="booking-key-info">
                <p className="booking-key-info-text">Time:&nbsp;&nbsp;&nbsp;</p>
              </div>
              <div className="booking-value-info">
                <p className="booking-value-info-text">{time}</p>
              </div>
            </div>
            <div className="individualBookingDataRow guestsCount-row">
              <div className="booking-key-info">
                <p className="booking-key-info-text">
                  Number of guests:&nbsp;&nbsp;&nbsp;
                </p>
              </div>
              <div className="booking-value-info">
                <p className="booking-value-info-text">{numberOfGuests}</p>
              </div>
            </div>
            <div className="individualBookingDataRow location-row">
              <div className="booking-key-info">
                <p className="booking-key-info-text">
                  Location:&nbsp;&nbsp;&nbsp;
                </p>
              </div>
              <div className="booking-value-info">
                <p className="booking-value-info-text">
                  Swanlake Compound, 1st Settlement, New Cairo, Cairo Governorate <br />
                  <a
                    className="googleMapBox"
                    rel="noreferrer"
                    target="_blank"
                    href="https://goo.gl/maps/zGUKKhEXmitpMg9N9"
                    style={{
                      color: "#4f5cd6",
                      textDecoration: "underline"
                    }}
                  >
                    CLICK HERE TO VIEW MAP ONLINE
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="instructionsText">
            <p className="plainTextPoints">
              We kindly ask you to follow our House Rules:
            </p>
            <p className="plainTextPoints">
              {" "}
              • Age restriction: 21+ after 6 PM
            </p>
            <p className="plainTextPoints">
              • Dress Code: Smart Casual (Shorts or flip-flops, uniforms
              or athletic sportswear will not be admitted).
            </p>
            <p className="plainTextPoints">
              • Guests intoxicated or under the influence of drugs will not be
              allowed entry.
            </p>
            <p className="plainTextPoints">
              • Management reserves the right to refuse entry at their own
              discretion.
            </p>
            <p className="plainTextPoints">
              • Please arrive on time to secure your reservation. KAZOKU has a
              30-minute table holding policy.
            </p>
            <p className="plainTextPoints">
              • If you wish to make any changes to your reservation, please
              contact us on{" "}
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
            </p>
          </div>
        </div>

        {/* logo image wrraper */}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <p className="arigato">ARIGATO! </p>
        </div>
        <div>
          <div className="logoImageBox">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <img
                style={{ alignSelf: "center" }}
                className="logoImage"
                src="https://i.ibb.co/Q64sWSQ/Transparent-Kazoku.png"
                alt="logo_Kazouko"
              />
            </div>
          </div>
        </div>
        {/* powered by section */}
        <div
          className="poweredByText"
          style={{
            width: "100%",
            display: "flex"
          }}
        >
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: "#6e6565e3", textDecoration: "none" }}
              href="https://www.anyware.software/"
            >
              Powered by <i className="far fa-copyright" />
              <span
                style={{
                  textDecoration: "underline",
                  color: "rgb(79, 92, 214)"
                }}
              >
                {" "}
                Anyware software{" "}
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default KazoukoReservation;
