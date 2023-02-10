import React, { useState } from "react"
import PercentageBar from "./PercentageBar/PercentageBar"
import SuivantButton from "./SuivantButton/SuivantButton"
import RetourBtn from "../../Components/RetourBtn/RetourBtn"
import PanelContent1 from "./PanelContents/PanelContent1/PanelContent1"
import PanelContent2 from "./PanelContents/PanelContent2/PanelContent2"

function MainPanel() {
  const [panel, setPanel] = useState(0)

  function controlSetPanelPlus() {
    if (panel < 1) {
      setPanel(panel + 1)
    }
  }

  function controlSetPanelMinus() {
    if (panel >= 1) {
      setPanel(panel - 1)
    }
  }

  console.log(panel)

  return (
    <div>
      <RetourBtn controlSetPanelMinus={controlSetPanelMinus} />
      <PercentageBar />
      <div>
        {panel === 0 && <PanelContent1 />}
        {panel === 1 && <PanelContent2 />}
        <SuivantButton controlSetPanelPlus={controlSetPanelPlus} />
      </div>
    </div>
  )
}

export default MainPanel
