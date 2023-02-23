import React from "react"
import "../PanelContent1/PanelContent1.css"

function NonBtn2912mois({ clicked, setClicked }) {
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
        <b>
          Non, <br />
          entre 9 et 12 mois
        </b>
      </p>
    </div>
  )
}

export default NonBtn2912mois
