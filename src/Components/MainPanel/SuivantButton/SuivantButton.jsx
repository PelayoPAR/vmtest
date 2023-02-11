import React from "react"
import "./SuivantButton.css"

function SuivantButton({ controlSetPanelPlus }) {
  return (
    <div>
      <button
        className="suivantButton"
        onClick={() => {
          controlSetPanelPlus()
        }}
      >
        SUIVANT
      </button>
    </div>
  )
}

export default SuivantButton
