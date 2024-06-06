import React from "react"

type ButtonPropsType = {
    onClick: () => void
    disabled?: boolean
    children: React.ReactNode
}

export const Button = (props:ButtonPropsType) => {
    return <button onClick={props.onClick} style={props.disabled ? s.disabledButton : s.mainButton} disabled={props.disabled}>{props.children}</button>
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
    disabledButton: {
      opacity: "0.5",
      padding: "8px",
      backgroundColor: "rgb(251, 63, 92)",
      color: "rgb(249, 250, 255)",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      alignSelf: "flex-end"
    }
      
     
  }