import React from "react"
import NonBtn1 from "./NonBtn1"
import OuiBtn1 from "./OuiBtn1"

function PanelContent1() {
  return (
    <div>
      <h4>Avez-vous la fibre optique ?</h4>
      <p>
        Cette information nous permet de mieux cerner votre besoin en termes
        d'offre internet
      </p>
      <div>
        <OuiBtn1 />
        <NonBtn1 />
      </div>
    </div>
  )
}

export default PanelContent1
