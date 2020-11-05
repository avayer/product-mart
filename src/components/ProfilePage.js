import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUserData } from '../actions/userActions';

const ProfilePage = (props) => {

  useEffect(()=> {
    props.getUserData(props.userId);
  }, [props.userId])

  return(
    <div>
      <h1>Profile Page</h1>
      <p>{props.user.email}</p>
      <p>{props.user.username}</p>
      <p>{props.user.firstName}</p>
      <p>{props.user.lastname}</p>
      <p>{props.user.location}</p>
      <p>{props.user.mobileNumber}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {user: state.user};
}

export default connect(mapStateToProps, { getUserData })(ProfilePage);