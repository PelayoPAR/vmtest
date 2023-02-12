import React from "react"
import "../PanelContent1/PanelContent1.css"

function OuiBtn1() {
  return (
    <div className="ouiNonButtonDiv" style={{ borderStyle: "solid 1px black" }}>
      <img src="/Img/SurveillanceOK.png" alt="Oui" />
      <p style={{ color: "#ef6c00" }}>
        <b>Oui</b>
      </p>
    </div>
  )
}

export default OuiBtn1
