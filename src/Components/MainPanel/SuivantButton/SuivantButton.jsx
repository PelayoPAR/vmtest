import React from "react"

function SuivantButton({ controlSetPanelPlus }) {
  return (
    <div>
      <button
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
