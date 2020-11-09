import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getUserData } from '../actions/userActions';
import NavbarComponent from './ui-components/NavbarComponent';


const style = {
  width: "40%",
  margin: "0 auto",
};

const ProfilePage = (props) => {

  const [pwdType, setPwdType] = useState('password');
  
  useEffect(()=> {
    props.getUserData(props.userId);
  }, [props.userId])

  function changePwdType() {
    if (pwdType === 'text') setPwdType('password')
    else setPwdType('text')
  }

  return (
    <div>
      <NavbarComponent />
      <div className="ui middle aligned grid" style={style}>
        <div className="column">
          <button className="ui fluid large teal submit button" disabled>
            Profile
          </button>
          <form className="ui large form">
            <img
              className="ui centered small circular image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSHOuptGhqIbhXJHddNAf6BqQvJCPK6p_X7w&usqp=CAU"
            />
            <div className="ui stacked segment">
              <div className="two fields">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="address card icon"></i>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="FirstName"
                      value={props.user.firstName}
                      disabled="true"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="address card icon"></i>
                    <input
                      name="lastName"
                      type="textarea"
                      placeholder="LastName"
                      value={props.user.lastName}
                      disabled="true"
                    />
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="envelope icon"></i>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    value={props.user.email}
                    disabled="true"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={props.user.username}
                    disabled="true"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    name="password"
                    type={pwdType}
                    placeholder="Password"
                    value={props.user.password}
                    disabled="true"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui checkbox">
                  <input
                    name="showpwd"
                    type="checkbox"
                    placeholder="Password"
                    value={props.user.password}
                    onChange={changePwdType}
                  />
                  <label> Show password</label>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="map marker alternate icon"></i>
                  <input
                    name="location"
                    type="text"
                    placeholder="Location"
                    value={props.user.location}
                    disabled="true"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="mobile icon"></i>
                  <input
                    name="mobileNumber"
                    type="text"
                    placeholder="Mobile number"
                    value={props.user.mobileNumber}
                    disabled="true"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {user: state.user};
}

export default connect(mapStateToProps, { getUserData })(ProfilePage);