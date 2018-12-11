
/**
 * Swapnil Nandapure
 */

import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  AppRegistry,
  ScrollView,
  Switch,
  Text,
} from 'react-native';

export default class NextInput extends React.Component {
  constructor(props) {
    super(props);

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};

    this.state = {
      buttonsHidden: false,
    };
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <TextInput
          placeholder="one"
          blurOnSubmit={ false }
          onSubmitEditing={() => {
            this.focusNextField('two');
          }}
          returnKeyType={ "next" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['one'] = input;
          }}
        />
        <TextInput
          placeholder="two"
          blurOnSubmit={ false }
          onSubmitEditing={() => {
            this.focusNextField('three');
          }}
          returnKeyType={ "next" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['two'] = input;
          }}
        />
        <TextInput
          placeholder="three"
          blurOnSubmit={ false }
          onSubmitEditing={() => {
            this.focusNextField('four');
          }}
          returnKeyType={ "next" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['three'] = input;
          }}
        />
        <TextInput
          placeholder="four"
          blurOnSubmit={ true }
          returnKeyType={ "done" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['four'] = input;
          }}
        />
        <View style={styles.switchInput}>
            <Switch
              value={this.state.buttonsHidden}
              onValueChange={() => {
                this.setState({
                  buttonsHidden: !this.state.buttonsHidden
                })
              }}
            />
            <Text style={styles.switchInputText}>
              Hide arrows
            </Text>
          </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    flexDirection: 'column',
  },
  textInput: {
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  switchInput: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  switchInputText: {
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 10,
  },
});

