import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

import QrScanner from "react-qr-scanner";

const QrCode = () => {
  const [formdata, setFormData] = useState();

  let qrData = new Map();

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleScan = (data) => {
    if (qrData.has(data)) {
      return;
    } else {
      qrData.set(data);
      console.log(qrData);
    }
  };

  return (
    <>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "#fff" }}>
        <div className="qrcode">
          <form>
            <input
              type="text"
              name="test1"
              value={formdata}
              onChange={(e) => setFormData(e.target.value)}
            />
            {/* <input
              type="text"
              name="test2"
              value={test2}
              onChange={handleChange}
              style={{ marginBottom: "25px" }}
            /> */}
          </form>
        </div>
        <QRCodeSVG
          style={{ marginLeft: "50px", width: "182px", height: "182px" }}
          value={formdata}
        />
        <QrScanner
          style={{ marginTop: "100px" }}
          onScan={handleScan}
          onError={(err) => console.log(err)}
        />
      </div>
    </>
  );
};

export default QrCode;
