import React from "react"
import "../PanelContent1/PanelContent1.css"

function OuiBtn2({ clicked, setClicked }) {
  const btnStyle = { color: clicked === 0 ? "#ef6c00" : "inherit" }
  return (
    <div
      className="ouiNonButtonDiv"
      onClick={() => {
        setClicked(0)
      }}
    >
      <img src="/Img/SurveillanceOK.png" alt="Non" />

      <p style={btnStyle}>
        <b>
          Oui,
          <br />
          plus d'un an
        </b>
      </p>
    </div>
  )
}

export default OuiBtn2
