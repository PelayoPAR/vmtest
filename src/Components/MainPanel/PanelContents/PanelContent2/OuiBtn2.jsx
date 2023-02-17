import React from "react"
import "../PanelContent1/PanelContent1.css"

function OuiBtn2({ clicked, setClicked }) {
  // const [clicked, setClicked] = useState(false)

  return (
    <div
      className="ouiNonButtonDiv"
      // onClick={() => {
      //   setClicked(!clicked)
      // }}
      onClick={() => {
        setClicked(0)
      }}
    >
      <img src="/Img/SurveillanceOK.png" alt="Non" />
      {/* {clicked && (
        <p style={{ color: "#ef6c00" }}>
          <b>
            Oui,
            <br />
            plus d'un an
          </b>
        </p>
      )}
      {!clicked && (
        <p>
          <b>
            Oui,
            <br />
            plus d'un an
          </b>
        </p>
      )} */}

      {clicked !== 0 && (
        <p>
          <b>
            Oui,
            <br />
            plus d'un an
          </b>
        </p>
      )}
      {clicked === 0 && (
        <p style={{ color: "#ef6c00" }}>
          <b>
            Oui,
            <br />
            plus d'un an
          </b>
        </p>
      )}
    </div>
  )
}

export default OuiBtn2
