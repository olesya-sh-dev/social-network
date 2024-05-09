import React from "react"

type ButtonPropsType = {
    onClick: () => void
    children: React.ReactNode
}

export const Button = (props:ButtonPropsType) => {
    return <button onClick={props.onClick} style={s.mainButton}>{props.children}</button>
  }

  const s = {
    mainButton: {
      padding: "8px",
      backgroundColor: "rgb(251, 63, 92)",
      color: "rgb(249, 250, 255)",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      alignSelf: "flex-end"
    },
  }