import React from "react";

import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import PhoneTwoToneIcon from "@material-ui/icons/PhoneTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import AirportShuttleTwoToneIcon from "@material-ui/icons/AirportShuttleTwoTone";
import LocalMallTwoToneIcon from "@material-ui/icons/LocalMallTwoTone";
import TransferWithinAStationTwoToneIcon from "@material-ui/icons/TransferWithinAStationTwoTone";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import ContactSupportTwoToneIcon from "@material-ui/icons/ContactSupportTwoTone";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import DateRangeTwoToneIcon from "@material-ui/icons/DateRangeTwoTone";
import HourglassFullTwoToneIcon from "@material-ui/icons/HourglassFullTwoTone";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";

const tableDataStyle = {
  display: "flex",
  alignItems: "center",
};

const VisitorForm = () => {
  return (
    <div className="visitor-form">
      <h2
        style={{
          fontFamily: "var(--font-secondary",
          color: "var(--color-primary)",
          textShadow: "0 .1rem .1rem var(--color-black)",
        }}>
        ENTER VISITOR DETAILS
      </h2>
      <table style={{ margin: "0 auto" }}>
        <tr>
          <td id="outer-table">
            <table>
              <tr>
                <td style={tableDataStyle}>
                  <AccountCircleTwoToneIcon />
                  <input type="text" placeholder="Visitor Name" />
                </td>
                <td style={tableDataStyle}>
                  <LocationOnTwoToneIcon />
                  <input type="text" placeholder="Place of Visitor" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <PhoneTwoToneIcon />
                  <input type="text" placeholder="Phone" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <EmailTwoToneIcon />
                  <input type="text" placeholder="Email" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <AirportShuttleTwoToneIcon />
                  <input type="text" placeholder="Vehicle" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <LocalMallTwoToneIcon />
                  <input type="text" placeholder="Material" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <TransferWithinAStationTwoToneIcon />
                  <input type="text" placeholder="To Meet" />
                </td>
              </tr>
            </table>
          </td>
          <td id="outer-table">
            <table>
              <tr>
                <td style={tableDataStyle}>
                  <GroupAddTwoToneIcon />
                  <input type="text" placeholder="No.of Visitors" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <ContactSupportTwoToneIcon />
                  <input type="text" placeholder="Purpose" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <AccountBalanceTwoToneIcon />
                  <input type="text" placeholder="College" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <DateRangeTwoToneIcon />
                  <input type="text" placeholder="From" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <DateRangeTwoToneIcon />
                  <input type="text" placeholder="To" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <HourglassFullTwoToneIcon />
                  <input type="text" placeholder="Time In" />
                </td>
              </tr>
              <tr>
                <td style={tableDataStyle}>
                  <VpnKeyTwoToneIcon />
                  <input type="text" placeholder="Pass ID" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default VisitorForm;
