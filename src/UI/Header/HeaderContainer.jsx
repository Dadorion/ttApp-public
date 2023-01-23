import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData } from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.getAuthUserData();
   }

   render() {
      return (
         <Header {...this.props} />
      )
   }
}

function mapStateToProps(state) {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,

   }
}

export default connect(mapStateToProps, {
   getAuthUserData
})(HeaderContainer);