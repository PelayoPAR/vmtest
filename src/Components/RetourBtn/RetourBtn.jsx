import React from "react"
import "./RetourBtn.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { FaArrowLeft } from "@react-icons/fa"

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
        {/* <FontAwesomeIcon icon={FaArrowLeft} /> */}
        Retour
      </button>
    </div>
  )
}

export default RetourBtn
