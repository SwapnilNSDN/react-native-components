/**
 * Swapnil Nandapure
 * Link : https://www.npmjs.com/package/react-native-app-intro-slider
 * Command : npm i react-native-app-intro-slider --save
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});
 
const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./images/c1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./images/c2.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./images/c3.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
];
 
export default class SimpleWalkthrough extends React.Component {
  state = {
    showRealApp: false
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <SimpleWalkthrough/>;
    } else {
      return <AppIntroSlider slides={slides} onDone={this._onDone}/>;
    }
  }
}
