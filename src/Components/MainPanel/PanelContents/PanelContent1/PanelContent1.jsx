import React from "react"
import NonBtn1 from "./NonBtn1"
import OuiBtn1 from "./OuiBtn1"
import "./PanelContent1.css"

function PanelContent1() {
  return (
    <div className="panelContentMain">
      <h3>Avez-vous la fibre optique ?</h3>
      <p style={{ color: "#ef6c00" }}>
        <b>
          Cette information nous permet de mieux cerner votre besoin en termes{" "}
          <br />
          d'offre internet.
        </b>
      </p>
      <div className="ouiNonButtonsDiv">
        <OuiBtn1 />
        <NonBtn1 />
      </div>
    </div>
  )
}

export default PanelContent1
