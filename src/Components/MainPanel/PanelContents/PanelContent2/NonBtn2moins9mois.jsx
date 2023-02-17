import React from "react"
import "../PanelContent1/PanelContent1.css"

function NonBtn2moins9mois({ clicked, setClicked }) {
  return (
    <div
      className="ouiNonButtonDiv"
      onClick={() => {
        setClicked(2)
      }}
    >
      <img src="/Img/SurveillanceX.png" alt="Non" />
      {clicked !== 2 && (
        <p>
          <b>
            Non, <br />
            moins de 9 mois
          </b>
        </p>
      )}
      {clicked === 2 && (
        <p style={{ color: "#ef6c00" }}>
          <b>
            Non, <br />
            moins de 9 mois
          </b>
        </p>
      )}
    </div>
  )
}

export default NonBtn2moins9mois
