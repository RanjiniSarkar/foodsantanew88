import React from 'react';
import LottieView from 'lottie-react-native';

export default class FoodAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/4762-food-carousel.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}