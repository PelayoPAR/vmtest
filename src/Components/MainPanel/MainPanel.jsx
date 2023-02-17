import React, { useState } from "react"
import ProgressBar from "./ProgressBar/ProgressBar"
import SuivantButton from "./SuivantButton/SuivantButton"
import RetourBtn from "../../Components/RetourBtn/RetourBtn"
import PanelContent1 from "./PanelContents/PanelContent1/PanelContent1"
import PanelContent2 from "./PanelContents/PanelContent2/PanelContent2"
import PanelContent3 from "./PanelContents/PanelContent3/PanelContent3"
import "./MainPanel.css"

function MainPanel() {
  const [panel, setPanel] = useState(0)
  const [completed, setCompleted] = useState(0)

  function controlSetPanelPlus() {
    if (panel <= 1) {
      setPanel(panel + 1)
      if (completed <= 50) {
        setCompleted(completed + 50)
      }
    }
  }

  function controlSetPanelMinus() {
    if (panel >= 1) {
      setPanel(panel - 1)
      if (completed >= 50) {
        setCompleted(completed - 50)
      }
    }
  }

  return (
    <div
      className="mainPanelMain"
      style={{ backgroundImage: "url('/Img/fiberbgimg.jpg')" }}
    >
      <div className="retourPlusContentDiv">
        <div className="retourBtnParent">
          <RetourBtn controlSetPanelMinus={controlSetPanelMinus} />
        </div>
        <div className="contentPanel">
          <div className="progressBarMain">
            {panel === 0 && (
              <ProgressBar
                bgcolor={"linear-gradient(to right, #ef6c00, #febe10)"}
                completed={completed}
              />
            )}
            {panel === 1 && (
              <ProgressBar
                bgcolor={"linear-gradient(to right, #ef6c00, #febe10"}
                completed={completed}
              />
            )}
            {panel === 2 && (
              <ProgressBar
                bgcolor={"linear-gradient(to right, #ef6c00, #febe10"}
                completed={completed}
              />
            )}
          </div>
          <div className="panelEtSuivantDiv">
            {panel === 0 && <PanelContent1 />}
            {panel === 1 && <PanelContent2 />}
            {panel === 2 && <PanelContent3 />}
            <SuivantButton controlSetPanelPlus={controlSetPanelPlus} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPanel
