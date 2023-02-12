import React from "react"

function ProgressBar(props) {
  const { bgcolor, completed } = props

  const containerStyles = {
    height: "30px",
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "0 0 50px",
  }

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    background: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
    lineHeight: "30px",
  }

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
