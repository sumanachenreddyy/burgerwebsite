import React, {Component} from "react"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import {Route, Redirect} from "react-router-dom"
import ContactData from "./ContactData/ContactData"
import {connect} from 'react-redux'

class Checkout extends Component {

  checkoutCancelledHandler = () => {    
    this.props.history.goBack()
  }

  checkoutContinuedHandler = () => {    
    this.props.history.replace("/checkout/contact-data")
  }

  render() {
    let checkoutSummary
    if (this.props.ings){
      let redirect = this.props.purchased? <Redirect to='/'/> : null
      checkoutSummary =
      <div>
        {redirect}
        <CheckoutSummary 
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}/>
        <Route 
          path={this.props.match.path + "/contact-data"} 
          component={ContactData}/>
      </div>
    } else {
      checkoutSummary = <Redirect to="/"/> 
    }
    return checkoutSummary
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    loading: state.order.loading,
    purchased: state.order.purchased
  }
}

export default connect(mapStateToProps)(Checkout)