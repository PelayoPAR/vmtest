import React from "react"
import "../PanelContent1/PanelContent1.css"

function OuiBtn1({ clicked, setClicked }) {
  return (
    <div
      className="ouiNonButtonDiv"
      onClick={() => {
        setClicked(0)
      }}
    >
      <img src="/Img/SurveillanceOK.png" alt="Oui" />
      {clicked === 0 && (
        <p style={{ color: "#ef6c00" }}>
          {" "}
          <b>Oui</b>
        </p>
      )}
      {clicked !== 0 && (
        <p>
          <b>Oui</b>
        </p>
      )}
    </div>
  )
}

export default OuiBtn1
