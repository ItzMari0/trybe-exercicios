import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { id, email, name, avatar } = this.props.user;
      return (
        <div>
          <p>Id: { id }</p>
          <p>E-mail: { email }</p>
          <p>Name: { name }</p>
          <Image source={ avatar } alternativeText='User Avatar' />
        </div>
      )
  }
}

export default UserProfile;