/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, Platform, TouchableHighlight } from 'react-native';
import Header from './src/Header';
import Footer from './src/Footer';
 
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 'Failure',
      textHeader:'Header',
      textFooter:'Footer',
      textFooterSubTitle:'SubTitle Footer'
    }
 }

  updateButtonText = ()=> {
    if(this.state.text == 'Success'){
      this.setState({ text: 'Failure',textHeader:'Failure' })
    }else{
      this.setState({ text: 'Success',textHeader:'Success' })
    }
  }
   
 render() {
    return (
       <View style={styles.textContainer}>
          <View style={styles.headerView}>
            <Header headerTitle={this.state.textHeader}/>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.textStyle} onPress = {this.updateButtonText}>
              {this.state.text}
            </Text>
          
          </View>
          <View style={styles.footerView}>
            <Footer title={this.state.textFooter} subtitle={this.state.textFooterSubTitle}/>
          </View>
       </View>
    );
 }
}

const styles = StyleSheet.create({
  textContainer: {
    flex:1,
    alignItems:'center',
    flexDirection: 'column'
  },
  textStyle: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'normal',
    //color: 'blue'
    color: (Platform.OS) === 'ios' ? 'blue' : 'green'
  },
  headerView: {
    flex: 0.1,
    width:'100%'
  },
  contentView: {
    flex: 0.8,
    width:'100%'
    
  },
  footerView: {
    flex: 0.1,
    width:'100%'
  },

})
