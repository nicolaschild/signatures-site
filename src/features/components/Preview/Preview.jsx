import React, { useState, useRef } from "react";
import * as clipboard from "clipboard-polyfill";
import PropTypes from "prop-types";
import { useStyles } from "./styles";

const Preview = (props) => {
  const { user } = props;
  const div = useRef(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const classes = useStyles();

  const copyToClipboard = () => {
    const dt = new clipboard.DT();
    const html = div.current.innerHTML.trim();
    dt.setData("text/plain", html);
    dt.setData("text/html", html);
    clipboard.write(dt);
    setCopySuccess(true);
  };

  return (
    <div>
      <div>
        <span className={classes.spanHeader} style={{ paddingBottom: "10px" }}>
          Email signature generator
        </span>
      </div>
      <div className={classes.contentTable}>
        {user.name && (
          <table ref={div}>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            maxWidth: "220px",
                          }}
                        >
                          <img
                            style={{ width: "100%" }}
                            className={classes.logo}
                            src="https://drive.google.com/uc?export=view&id=1KFfnZKv7bDOtr98rkBnlbPyR00Dy_Cfc"
                            alt="logo"
                          />
                          <div
                            style={{
                              marginTop: "5px",
                            }}
                          >
                            <div
                              style={{
                                margin: "auto",
                                width: "70%",
                              }}
                            ></div>
                          </div>
                        </td>
                        <td
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            margin: "0 20px",
                          }}
                        >
                          <table>
                            <tbody>
                              <tr>
                                <td style={{ textAlign: "initial" }}>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "18px",
                                      color: "#000",
                                    }}
                                  >
                                    {user.name}
                                  </span>
                                  <span>&nbsp;</span>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "18px",
                                      color: "#000",
                                    }}
                                  >
                                    {user.lastName}
                                  </span>
                                  {user.jobTitle && (
                                    <p
                                      style={{
                                        margin: 0,
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "14px",
                                          lineHeight: "22px",
                                          color: "#000",
                                        }}
                                      >
                                        {user.jobTitle}
                                      </span>
                                    </p>
                                  )}
                                  {user.phone && (
                                    <table>
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{
                                              margin: "5px 0",
                                            }}
                                          >
                                            <img
                                              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon.png"
                                              color="#000"
                                              alt="Phone icon"
                                              style={{
                                                width: "12px",
                                                display: "block",
                                                backgroundColor: "#000",
                                                marginRight: "15px",
                                              }}
                                            />
                                          </td>
                                          <td>
                                            <span
                                              style={{
                                                fontSize: "12px",
                                                color: "#000",
                                              }}
                                            >
                                              {user.phone}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  )}
                                  {user.email && (
                                    <table
                                      style={{
                                        marginTop: "-5px",
                                      }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{
                                              margin: "5px 0",
                                            }}
                                          >
                                            <img
                                              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon.png"
                                              color="#000"
                                              alt="Email icon"
                                              style={{
                                                width: "12px",
                                                display: "block",
                                                backgroundColor: "#000",
                                                marginRight: "15px",
                                              }}
                                            />
                                          </td>
                                          <td>
                                            <span
                                              style={{
                                                fontSize: "12px",
                                                color: "#000",
                                                textDecoration: "none",
                                              }}
                                            >
                                              {user.email}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  )}
                                  {user.email && (
                                    <table
                                      style={{
                                        marginTop: "-5px",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{
                                            cursor: "pointer",
                                          }}
                                        >
                                          <td
                                            style={{
                                              margin: "5px 0",
                                            }}
                                          >
                                            <img
                                              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon.png"
                                              color="#000"
                                              alt="Website URL icon"
                                              style={{
                                                width: "12px",
                                                display: "block",
                                                backgroundColor: "#000",
                                                marginRight: "15px",
                                              }}
                                            />
                                          </td>
                                          <td>
                                            <a
                                              href="https://trupointco.com"
                                              style={{
                                                textDecoration: "none",
                                                color: "#000",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  fontSize: "12px",
                                                }}
                                              >
                                                https://trupointco.com
                                              </span>
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div>
        {user.name && (
          <button
            type="submit"
            style={{
              marginTop: "30px",
              marginBottom: "10px",
              height: "45px",
              width: "85px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={copyToClipboard}
          >
            Copy
          </button>
        )}
        {copySuccess && <div style={{ color: "green" }}>Success!</div>}
      </div>
    </div>
  );
};

Preview.propTypes = {
  user: PropTypes.isRequired,
};

export default Preview;
