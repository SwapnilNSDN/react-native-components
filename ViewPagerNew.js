import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class ViewPagerNew extends Component {
    render(){
        return(
            <View style = {{flex : 1, flexDirection : 'row'}}>
               <View style = {{flex : 0.1}}>
                   <Text>Tejas</Text>
               </View>
               <View style={{flex : 0.9}}>
              <IndicatorViewPager
               style = {{height : 200}}
               indicator = {this._renderDotIndicator()}
              >
                  <View style = {{backgroundColor : 'pink', justifyContent : 'center', alignItems : 'center'}}><Text style = {{color : 'white'}}>Page One</Text></View>
                  <View style = {{backgroundColor : 'blue', justifyContent : 'center', alignItems : 'center'}}><Text style = {{color : 'white'}}>Page Two</Text></View>
                  <View style = {{backgroundColor : 'green', justifyContent : 'center', alignItems : 'center'}}><Text style = {{color : 'white'}}>Page Three</Text></View>
              </IndicatorViewPager>  
              </View> 

            </View>
        );
    }


    _renderTabIndicator(){
        return(
           <PagerTitleIndicator
             titles = {['red','blue','green']}  
           />
        );
    }

    _renderDotIndicator(){
        return <PagerDotIndicator pageCount = {3}/>;
    }
}