/**
 * 
 * Swapnil Nandapure
 * PopOver : https://github.com/jeanregisser/react-native-popover
 */

import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import Tooltip from 'react-native-walkthrough-tooltip';

export default class MyToolTip extends React.Component {
    state = {
        toolTipVisible : true,
    }

    closeToolTip = () => {
        this.setState({ toolTipVisible: false })
    } 

    showToolTip = () => {
        this.setState({ toolTipVisible: true })
      }

    render() {
        return(
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Tooltip style={{flex:1, alignItems:'center' }}
                    animated
                    isVisible={this.state.toolTipVisible}
                    content={<Text>Check this out!</Text>}
                    placement='bottom'
                    onClose={() => this.closeToolTip()}
                    >
                    <TouchableHighlight style={{padding: 10, backgroundColor:'#F00'}}>
                        <Text style={{color:'#FFF'}}>Press me</Text>
                    </TouchableHighlight>
                    </Tooltip>
            </View>
        )
      }
}