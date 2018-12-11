
/*
* Link : https://github.com/zbtang/React-Native-ViewPager#readme
*/

import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class ViewPagerPage extends Component {
    render() {
        return (
            <View style={{marginTop: 50}}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View  style={{flex:0.1}}><Text>sdfsf</Text></View>
                    <IndicatorViewPager
                        style={{height:200, flex:0.9}}  
                        indicator={this._renderDotIndicator()}>
                        <View style={{backgroundColor:'cadetblue'}}>
                            <Text>page one</Text>
                        </View>
                        <View style={{backgroundColor:'cornflowerblue'}}>
                            <Text>page two</Text>
                        </View>
                        <View style={{backgroundColor:'#1AA094'}}>
                            <Text>page three</Text>
                        </View>
                    </IndicatorViewPager>
                </View>
            </View>
        );
    }

    _renderDotIndicator() {
        return (
            <PagerDotIndicator
                pageCount={3}
                style={{ marginTop: 30 }}
                dotStyle={{ padding:5, borderRadius: 10, backgroundColor: '#FFF', borderColor: '#AB3030', borderWidth:1 }}
                selectedDotStyle ={{padding:5, borderRadius: 10, backgroundColor: '#AB3030', borderColor: '#AB3030', borderWidth:1 }}
            />
        )
    }
    
}