import React from "react"
import "../PanelContent1/PanelContent1.css"

function OuiBtn1({ clicked, setClicked }) {
  const btnStyle = { color: clicked === 0 ? "#ef6c00" : "inherit" }
  return (
    <div
      className="ouiNonButtonDiv"
      onClick={() => {
        setClicked(0)
      }}
    >
      <img src="/Img/SurveillanceOK.png" alt="Oui" />

      <p style={btnStyle}>
        {" "}
        <b>Oui</b>
      </p>
    </div>
  )
}

export default OuiBtn1
