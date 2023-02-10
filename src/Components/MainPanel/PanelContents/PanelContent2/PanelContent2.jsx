import React from "react"
import NonBtn2912mois from "./NonBtn2912mois"
import NonBtn2moins9mois from "./NonBtn2moins9mois"
import OuiBtn2 from "./OuiBtn2"

function PanelContent2() {
  return (
    <div>
      <h4>Plus d'un an chez votre op'erateur ?</h4>
      <OuiBtn2 />
      <NonBtn2912mois />
      <NonBtn2moins9mois />
    </div>
  )
}

export default PanelContent2
