import React from "react"

function RetourBtn({ controlSetPanelMinus }) {
  return (
    <div>
      <button
        onClick={() => {
          controlSetPanelMinus()
        }}
      >
        Retour
      </button>
    </div>
  )
}

export default RetourBtn
