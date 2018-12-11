/*
* Swapnil Nandapure
* Collapse : https://www.npmjs.com/package/accordion-collapse-react-native
* Commands : npm install --save accordion-collapse-react-native
*            npm install native-base --save
*
* CheckBox : https://github.com/caroaguilar/react-native-custom-checkbox#readme
* Command  : npm install react-native-custom-checkbox --save
             npm install react-native-vector-icons --save
             react-native link react-native-vector-icons
             
*/

/*
Notes : https://github.com/hiteshsahu/ReactNative-Expandable-List-View (Good)
https://github.com/cht8687/react-expandable-listview/blob/master/src/example/Example.js

*/

import React, { Component } from 'react';

import {AccordionList} from "accordion-collapse-react-native";
import { Separator } from 'native-base';
import { View, Text, StyleSheet, Image, CheckBox} from 'react-native';

class SectionListModule extends Component {
    constructor(props) {
      super(props);
  
      this.state={
        list:[
              {
                title: 'AC',
                body: ['AC Content','AC Content','AC Content']
              },
              {
                title: 'Engine',
                body: 'Engine  Content'
              },
              {
                title: 'Gear',
                body: 'Gear Content'
              },
              {
                title: 'Fluids',
                body: 'Fluids Content'
              },
              {
                title: 'Exhaust',
                body: 'Exhaust Content'
              }
            ]
      }
    }

    /* _head(item){
        return(
            <Separator bordered style={{alignItems:'center'}}>
              <Text style={{textAlign:'center'}}>{item.title}</Text>
            </Separator>
        );
        //<Text numberOfLines={1} ellipsizeMode='head'}>long long long long text<Text>
        //CustomCheckBox : onChange={(name, checked) => _myFunction(name, checked)}
        //<CustomCheckbox checked={true} style={{backgroundColor: '#f2f2f2', color:'#900', borderRadius: 5}}/>
        //<CheckBox checkedIcon={<Image source={require('../checked.png') />} uncheckedIcon={<Image source={require('../unchecked.png') />} checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})} />
     } */

    _head(item){
      return(
        <View>
          <View style={styles.dividerTopLine}/>
            <View style={{paddingLeft:10, paddingRight:10}}>
            <View style={styles.container}>
              <View style={styles.leftHeaderStyle}>
                <Image source={require('./images/ac.png')} style={styles.photo} />
                <Text style={styles.text} numberOfLines={1}>
                    {item.title}
                </Text>
              </View>
              <View style={{flex:0.1}}>
                <Image source={require('./images/down_arrow.png')} style={styles.rightIcon} resizeMode="contain"/>
              </View>
            </View>
          </View>
          <View style={styles.dividerBottomLine}/>
        </View>
      );
  }
    
    _body(item){
        return (
          <View style={{paddingLeft:50}}>
              <View style={styles.innerContainer}>
                <CheckBox style={styles.rightIcon} checkedIcon={<Image source={require('./images/checked.png')}/>} uncheckedIcon={<Image source={require('./images/unchecked.png')}/>}/>
                  <Text style={styles.text} numberOfLines={1}>
                      {item.body}
                  </Text>
              </View>
            <View style={styles.dividerGrayBottomLine}/>
          </View>
        );
    }
    
    render() {
        return (
              <View style={{marginTop:20}}>
                <AccordionList
                  list={this.state.list}
                  header={this._head}
                  body={this._body}
                />
              </View>
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
    
});
  
export default SectionListModule;