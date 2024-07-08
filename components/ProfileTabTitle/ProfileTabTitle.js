import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const ProfileTabsTitle = props => {
  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
      {props.title}
    </Text>
  );
};

ProfileTabsTitle.prototype = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabsTitle;
