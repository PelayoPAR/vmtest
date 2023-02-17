import React from "react"
import "./RetourBtn.css"

function RetourBtn({ controlSetPanelMinus }) {
  return (
    <div className="retourBtnDiv">
      <button
        className="retourBtn"
        onClick={() => {
          controlSetPanelMinus()
        }}
      >
        <span className="leftArrow">&#x2190;</span>
        Retour
      </button>
    </div>
  )
}

export default RetourBtn
