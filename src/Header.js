
/*
* This Component is to set header to other components
* https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * https://github.com/xotahal/react-native-material-ui/blob/master/docs/Toolbar.md
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import App from '../App';

export default class Header extends React.Component{

    constructor(props) {
        super(props)
        console.log("Header Props >>>"+JSON.stringify(this.props));
        this.state = {title: this.props.headerTitle};
     }

    render(){
        return(
            <View style={styles.componentStyle}>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{this.state.title}</Text>
                </View>
                <View style={styles.dividerView}>
                    <View style={styles.dividerStyle}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentStyle: {
        width:'100%',   
        height:'100%',  
        alignItems:'center',
        backgroundColor: '#FFF',
        flex: 1
    },
    viewStyle: {
        width:'100%',  
        height: 50,  
        alignItems:'center',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        flex: 0.9
    },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    dividerView:{
        width: '100%',
        flex: 0.1
    },
    dividerStyle:{
        width: '100%',
        height: 2,
        backgroundColor: '#CCC',
    }
})