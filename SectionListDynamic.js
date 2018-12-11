/*
* Swapnil Nandapure
* Ref : https://reactnativecode.com/simple-sectionlist-component-ios-android/
*/

import React, { Component } from 'react';
 
import { StyleSheet, View, SectionList, Text, 
  Platform, Alert, CheckBox, Image, ScrollView, TouchableOpacity } from 'react-native';


//Class
export default class SectionListDynamic extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentValue: true,

      //Constant Array
      finalFruits: [
        { title: 'Fruits Name From A', data: [
          { title: 'Apple', status:false, index: 0 },
          { title: 'Apricot', status:false, index: 1 },
          { title: 'Avocado', status:false, index: 2 },
        ], open:false, index: 0 },
        { title: 'Fruits Name From B', data: [
          { title: 'Banana', status:false, index: 0 },
          { title: 'Blackberry', status:false, index: 1 },
          { title: 'Blackcurrant', status:false, index: 2 },
          { title: 'Blueberry', status:false, index: 3 },
          { title: 'Boysenberry', status:false, index: 4 },
        ], open:false, index: 1 },
        { title: 'Fruits Name From C', data: [
          { title: 'Cherry', status:false, index: 0 },
          { title: 'Coconut', status:false, index: 1 },
          { title: 'Cantaloupe', status:false, index: 2 },
          { title: 'Crab apples', status:false, index: 3 },
          { title: 'Clementine', status:false, index: 4 },
        ], open:false, index: 2 },
        { title: 'Fruits Name From D', data: [
          { title: 'Damson plum', status:false, index: 0 },
          { title: 'Dragon Fruit', status:false, index: 1 },
          { title: 'Dates', status:false, index: 2 },
          { title: 'Dewberries', status:false, index: 3 },
          { title: 'Dinosaur Eggs', status:false, index: 4 },
        ], open:false, index: 3},
        { title: 'Fruits Name From E', data: [], open:false, index: 4 },
        { title: 'Fruits Name From F', data: [], open:false, index: 5 },
      ],

      //Flexible Array
      fruits: [
        { title: 'Fruits Name From A', data: [], open:false, index: 0, dataSize: 3 },
        { title: 'Fruits Name From B', data: [], open:false, index: 1, dataSize: 5 },
        { title: 'Fruits Name From C', data: [], open:false, index: 2, dataSize: 5 },
        { title: 'Fruits Name From D', data: [], open:false, index: 3, dataSize: 5},
        { title: 'Fruits Name From E', data: [], open:false, index: 4, dataSize: 0 },
        { title: 'Fruits Name From F', data: [], open:false, index: 5, dataSize: 0 },
      ],

    };
  }
  
  _changeValue(value) {
    this.setState({
      currentValue: !this.state.currentValue
    });
    console.log(value);
  }
 
  GetSectionHeaderItem=(section)=>{
    this.setState({
      open: section.open = !section.open,
      data: section.data = section.open == 0 ? [] : this.state.finalFruits[section.index].data,
    });
  }

  GetSectionListItem=(item)=>{
    this.setState({
      status: item.status = !item.status
    });
  }
 
  render() {
    return (
      <ScrollView>
        <View style={{ marginTop : (Platform.OS) == 'ios' ? 20 : 0 }}>
        <SectionList
            sections={this.state.fruits}
  
            renderSectionHeader={ ({section}) =>
              <TouchableOpacity onPress={this.GetSectionHeaderItem.bind(this, section)}>
                <View style={styles.dividerTopLine}/>
                  <View style={{paddingLeft:10, paddingRight:10}}>
                    <View style={styles.container}>
                      <View style={styles.leftHeaderStyle}>
                        <Image source={require('./images/ac.png')} style={styles.photo} />
                        <Text style={styles.text} numberOfLines={1}>
                            {section.title }
                        </Text>
                      </View>
                      <View style={{flex:0.1}}>
                        { section.dataSize > 0 ?(section.open === true ? 
                        <Image source={require('./images/up_arrow.png')} style={styles.rightIcon} resizeMode="contain"/> : 
                        <Image source={require('./images/down_arrow.png')} style={styles.rightIcon} resizeMode="contain"/>) : null}
                      </View>
                    </View>
                  </View>
                <View style={styles.dividerBottomLine}/>
              </TouchableOpacity>
            }
  
            renderItem={ ({item}) => 
              <TouchableOpacity onPress={this.GetSectionListItem.bind(this, item)}>
                <View style={{paddingLeft:50}}>
                    <View style={styles.innerContainer}>
                    {item.status == true ? 
                        <Image source={require('./images/checked.png')} style={styles.checkBoxDesign} resizeMode="contain"/> : 
                        <Image source={require('./images/unchecked.png')} style={styles.checkBoxDesign} resizeMode="contain"/> }
                        <Text style={styles.text} numberOfLines={1} >
                            { item.title } 
                        </Text>
                    </View>
                  <View style={styles.dividerGrayBottomLine}/>
                </View>
              </TouchableOpacity>
            }keyExtractor={ (item, index) => index }
          />
  
        </View> 
      </ScrollView>
 
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    text: {
    marginLeft: 12,
    fontSize: 16,
    color: '#000'
  }, 
  photo: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  dividerTopLine: {
    height: 1,
    width: '100%',
    backgroundColor:'#AB3030',
    marginBottom:10,
  },
  dividerBottomLine: {
    height: 1,
    width: '100%',
    backgroundColor:'#AB3030',
    marginTop:10,
  },
  rightIcon: {
    height: 25,
    width: 25,
  },
  checkBoxDesign: {
    height: 20,
    width: 20,
  },
  leftHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex:0.9
  },
  dividerGrayBottomLine: {
    height: 1,
    width: '100%',
    backgroundColor:'#CCC',
    marginTop:10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
  },
  checkBoxStyle: {
    backgroundColor: '#FFF',
    borderColor: '#AB3030',
    color:'#AB3030',
    borderRadius: 5
  },
                
});


/* var A = [
      { title: 'Apple', status:false },
      { title: 'Apricot', status:true },
      { title: 'Avocado', status:false },
    ] ;

    var B = [
      { title: 'Banana', status:false },
      { title: 'Blackberry', status:false },
      { title: 'Blackcurrant', status:false },
      { title: 'Blueberry', status:false },
      { title: 'Boysenberry', status:false },
    ] ;

    var C = [
      { title: 'Cherry', status:false },
      { title: 'Coconut', status:false },
      { title: 'Cantaloupe', status:false },
      { title: 'Crab apples', status:false },
      { title: 'Clementine', status:false },
    ] ;

    var D = [
      { title: 'Damson plum', status:false },
      { title: 'Dragon Fruit', status:false },
      { title: 'Dates', status:false },
      { title: 'Dewberries', status:false },
      { title: 'Dinosaur Eggs', status:false },
    ] ;

    var data = [
      { title: 'Fruits Name From A', data: A, open:true },
      { title: 'Fruits Name From B', data: B, open:false },
      { title: 'Fruits Name From C', data: C, open:false },
      { title: 'Fruits Name From D', data: D, open:false },
    ] */