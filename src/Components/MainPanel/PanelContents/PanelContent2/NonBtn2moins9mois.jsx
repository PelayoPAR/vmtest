import React from "react"
import "../PanelContent1/PanelContent1.css"

function NonBtn2moins9mois({ clicked, setClicked }) {
  const btnStyle = { color: clicked === 2 ? "#ef6c00" : "inherit" }
  return (
    <div
      className="ouiNonButtonDiv"
      onClick={() => {
        setClicked(2)
      }}
    >
      <img src="/Img/SurveillanceX.png" alt="Non" />

      <p style={btnStyle}>
        <b>
          Non, <br />
          moins de 9 mois
        </b>
      </p>
    </div>
  )
}

export default NonBtn2moins9mois
