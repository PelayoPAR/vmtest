import React from "react"
import "../PanelContent1/PanelContent1.css"

function NonBtn1({ clicked, setClicked }) {
  const btnStyle = { color: clicked === 1 ? "#ef6c00" : "inherit" }
  return (
    <div
      className="ouiNonButtonDiv"
      onClick={() => {
        setClicked(1)
      }}
    >
      <img src="/Img/SurveillanceX.png" alt="Non" />

      <p style={btnStyle}>
        {" "}
        <b>Non</b>
      </p>
    </div>
  )
}

export default NonBtn1
