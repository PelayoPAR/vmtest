import React from "react"
import "../PanelContent1/PanelContent1.css"

function NonBtn2912mois({ clicked, setClicked }) {
  // const [clicked, setClicked] = useState(false)

  return (
    <div
      className="ouiNonButtonDiv"
      // onClick={() => {
      //   setClicked(!clicked)
      // }}
      onClick={() => {
        setClicked(1)
      }}
    >
      <img src="/Img/SurveillanceX.png" alt="Non" />
      {/* {clicked && (
        <p style={{ color: "#ef6c00" }}>
          <b>
            Non, <br />
            entre 9 et 12 mois
          </b>
        </p>
      )}
      {!clicked && (
        <p>
          <b>
            Non, <br />
            entre 9 et 12 mois
          </b>
        </p>
      )} */}
      {clicked !== 1 && (
        <p>
          <b>
            Non, <br />
            entre 9 et 12 mois
          </b>
        </p>
      )}
      {clicked === 1 && (
        <p style={{ color: "#ef6c00" }}>
          <b>
            Non, <br />
            entre 9 et 12 mois
          </b>
        </p>
      )}
    </div>
  )
}

export default NonBtn2912mois
