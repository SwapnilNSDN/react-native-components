'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var OverlappedView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
                <Text style={styles.topLeft}> Top-Left</Text>
                <Text style={styles.topRight}> Top-Right</Text>
        <Text>Center</Text>
        <Text style={styles.bottomLeft}> Bottom-Left</Text>
        <Text style={styles.bottomRight}> Bottom-Right</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 24
  },
  topLeft:{
    position: 'absolute',
    left: 0,
    top: 0
  },
    topRight:{
    position: 'absolute',
    right: 0,
    top: 0
  },
    bottomLeft:{
    position: 'absolute',
    left: 0,
    bottom: 0
  },
    bottomRight:{
    position: 'absolute',
     right: 0,
    bottom: 0
  }
});

export default OverlappedView;