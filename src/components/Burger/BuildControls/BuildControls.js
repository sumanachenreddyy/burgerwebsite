import React from "react"
import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"

const controls = [
  {label: "Salad", type: "salad"},
  {label: "Bacon", type: "bacon"},
  {label: "Cheese", type: "cheese"},
  {label: "Meat", type: "meat"}
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p style={{width: "140px"}}>Total price: <strong>{props.price === 4 ? "0.00" : props.price.toFixed(2)}/-</strong></p>
    <button 
      className={classes.Clear} 
      disabled={!props.purchasable}
      onClick={props.clear}>Remove all ingredients</button>
    {controls.map((ctrl) => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        igValue={props.ingredients[ctrl.type]}
      />
    ))}
    <button 
      className={classes.OrderButton} 
      disabled={!props.purchasable}
      onClick={props.ordered}>{props.isAuth? 'ORDER NOW!' : 'SIGN UP TO ORDER'}
    </button>
  </div>
)

export default buildControls