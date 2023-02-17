import React, { useState } from "react"
import NonBtn2912mois from "./NonBtn2912mois"
import NonBtn2moins9mois from "./NonBtn2moins9mois"
import OuiBtn2 from "./OuiBtn2"

function PanelContent2() {
  const [clicked, setClicked] = useState(-1)

  return (
    <div className="panelContentMain">
      <h3>Plus d'un an chez votre opérateur ?</h3>
      <div className="ouiNonButtonsDiv">
        <OuiBtn2 clicked={clicked} setClicked={setClicked} />
        <NonBtn2912mois clicked={clicked} setClicked={setClicked} />
        <NonBtn2moins9mois clicked={clicked} setClicked={setClicked} />
      </div>
    </div>
  )
}

export default PanelContent2
