import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImgaeContainer}>
        <Image source={props.profileImage} style={style.image} />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};

export default UserStory;
