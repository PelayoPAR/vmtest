import React from "react"
import NonBtn1 from "./NonBtn1"
import OuiBtn1 from "./OuiBtn1"
import "./PanelContent1.css"

function PanelContent1() {
  return (
    <div className="panelContentMain">
      <h4>Avez-vous la fibre optique ?</h4>
      <p style={{ color: "#ef6c00" }}>
        Cette information nous permet de mieux cerner votre besoin en termes
        d'offre internet
      </p>
      <div className="ouiNonbuttons">
        <OuiBtn1 />
        <NonBtn1 />
      </div>
    </div>
  )
}

export default PanelContent1
