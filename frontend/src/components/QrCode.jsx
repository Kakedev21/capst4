import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

import QrScanner from "react-qr-scanner";

const QrCode = () => {
  const [formdata, setFormData] = useState({
    id: new Date().toISOString(),
    name: "",
    gender: "",
  });

  const [qrDatas, setQrDatas] = useState({});

  const { name, gender } = formdata;

  let qrData = new Map();

  let finalData = [];

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleScan = (data) => {
    const userId = data?.text;
    if (!userId) return;
    if (qrData.has(userId)) {
      console.log("already scanned");
    } else {
      console.log(JSON.parse(data.text));
      setQrDatas(JSON.parse(data.text));
    }
  };

  const result = () => {};

  result();

  //render the map as a table
  // const renderTable = () => {
  //   return (
  //     <table>
  //       <tbody>
  //         {Array.from(qrData, ([key, value]) => {
  //           return (
  //             <tr key={key}>
  //               <td>{key}</td>
  //               <td>{value}</td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   );
  // };

  return (
    <>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "#fff" }}>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>gender</th>
              <th>Time in</th>
            </tr>
          </thead>
          <tbody>
            {qrDatas && (
              <>
                <tr>
                  <td>{qrDatas.name}</td>
                  <td>{qrDatas.gender}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <div className="qrcode">
          <form>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={handleChange}
            />
          </form>
        </div>
        <QRCodeSVG
          style={{ marginLeft: "50px", width: "182px", height: "182px" }}
          value={JSON.stringify(formdata)}
        />
        <QrReader
          style={{ marginTop: "100px" }}
          onResult={handleScan}
          onError={(err) => console.log(err)}
        />
      </div>
    </>
  );
};

export default QrCode;
