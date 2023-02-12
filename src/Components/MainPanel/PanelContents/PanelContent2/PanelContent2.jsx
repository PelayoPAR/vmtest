import React from "react"
import NonBtn2912mois from "./NonBtn2912mois"
import NonBtn2moins9mois from "./NonBtn2moins9mois"
import OuiBtn2 from "./OuiBtn2"

function PanelContent2() {
  return (
    <div className="panelContentMain">
      <h3>Plus d'un an chez votre opérateur ?</h3>
      <div className="ouiNonButtonsDiv">
        <OuiBtn2 />
        <NonBtn2912mois />
        <NonBtn2moins9mois />
      </div>
    </div>
  )
}

export default PanelContent2
