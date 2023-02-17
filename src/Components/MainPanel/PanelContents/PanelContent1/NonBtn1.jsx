import React from "react"
import "../PanelContent1/PanelContent1.css"

function NonBtn1({ clicked, setClicked }) {
  return (
    <div
      className="ouiNonButtonDiv"
      onClick={() => {
        setClicked(1)
      }}
    >
      <img src="/Img/SurveillanceX.png" alt="Non" />
      {clicked === 1 && (
        <p style={{ color: "#ef6c00" }}>
          <b>Non</b>
        </p>
      )}
      {clicked !== 1 && (
        <p>
          <b>Non</b>
        </p>
      )}
    </div>
  )
}

export default NonBtn1
