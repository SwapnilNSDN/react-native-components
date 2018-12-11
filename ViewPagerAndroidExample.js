/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Swiper, TitleBar, TabBar, ViewPager } from 'react-native-awesome-viewpager';

export default class ViewPagerAndroidExample extends Component {
  state = {
    scrollEnabled: true,
    type: 1,
  }

  render() {
    switch (this.state.type) {
      case 1:
        return (
            <View style = {{flex : 1, flexDirection : 'row'}}>
               <View style = {{flex : 0.1}}>
                   <Text>Tejas</Text>
               </View>
               <View style={{flex : 0.9}}>
                <Swiper
                    ref='ViewPager'
                    loop={true}
                    autoplay={false}
                    interval={2000}
                    onPageScroll={(e) => console.log(e, 'onPageScroll')}
                    onPageScrollStateChanged={(e) => console.log(e, 'onPageScrollStateChanged')}
                    onPageSelected={(e) => console.log(e, 'onPageSelected')}
                    scrollEnabled={this.state.scrollEnabled}
                    style={styles.container}
                    borderStyle={styles.indicatorStyle}>
                    <View style={{ backgroundColor: 'red', padding: 60 }}>
                    <Text
                        onPress={() => this.refs.ViewPager.setPage(1)}>page 1</Text>
                    <Text
                        onPress={() => this.setState({ scrollEnabled: false })}>aasd</Text>
                    <Text
                        onPress={() => this.setState({ scrollEnabled: true })}>asdddd</Text>
                    </View>
                    <View style={{ backgroundColor: 'blue', padding: 60 }}>
                    <Text
                        onPress={() => this.refs.ViewPager.setPageWithoutAnimation(0)}>gjk</Text>
                    </View>
                    <View style={{ backgroundColor: '#448811', padding: 60 }}>
                    <Text
                        onPress={() => this.refs.ViewPager.setPageWithoutAnimation(0)}>page 3</Text>
                    </View>
                    <View style={{ backgroundColor: '#226677', padding: 60 }}>
                    <Text
                        onPress={() => this.refs.ViewPager.setPageWithoutAnimation(0)}>page 4</Text>
                    </View>
                </Swiper >
          </View> 
          </View>
        );
      case 2:
        return <TitleBar
          style={styles.container}
          titles={['Page 1', 'Page 2', 'Page 3']}>
          <View style={{ backgroundColor: 'red', padding: 60 }}>
            <Text>Page 1</Text>
          </View>
          <View style={{ backgroundColor: 'green', padding: 60 }}>
            <Text>Page 2</Text>
          </View>
          <View style={{ backgroundColor: 'blue', padding: 60 }}>
            <Text>Page 3</Text>
          </View>
        </TitleBar>
      case 3:
        return <TabBar
          style={styles.container}
          tabs={[{
            text: 'Page 1',
            //icon: require('./images/up_arrow.png'),
            //selectedIcon: require('./images/down_arrow.png')
          }, {
            text: 'Page 2',
            //icon: require('./images/up_arrow.png'),
            //selectedIcon: require('./images/down_arrow.png'),
          }, {
            text: 'Page 3',
            //icon: require('./images/up_arrow.png'),
            //selectedIcon: require('./images/down_arrow.png'),
          }]}>
          <View style={{ backgroundColor: 'red', padding: 60 }}>
            <Text>Page 1</Text>
          </View>
          <View style={{ backgroundColor: 'green', padding: 60 }}>
            <Text>Page 2</Text>
          </View>
          <View style={{ backgroundColor: 'blue', padding: 60 }}>
            <Text>Page 3</Text>
          </View>
        </TabBar>
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efdeed',
    flexDirection: 'column',
    paddingTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  indicatorStyle: {
    backgroundColor: '#000'
  },
});