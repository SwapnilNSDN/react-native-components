import React from 'react';
import { View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
 
export default class GooglePlacesExample extends React.Component {

    render() {
        return (
            <View style={{flex:1, marginTop:50, padding:20, backgroundColor:'#FFF'}}>
            <View >
                <GooglePlacesAutocomplete
                    placeholder={'Start entering your address or zip code'}
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        this.setState({
                            googlePostalCode: details.address_components,
                            streetAddress: this.state.getStreet != '' ? this.state.getStreet : data.description
                        });
                        console.log("street address " + JSON.stringify(data.description));
                        console.log("address" + JSON.stringify(details.address_components));
                    }}
                    query={{
                        key: 'Strings.GOOGLE_PLACES_API_KEY_ADDRESS',
                        language: 'en', // language of the results
                        components: 'country:IND'
                    }}
                    styles={{
                        textInputContainer: {
                          backgroundColor: '#AB3030',
                          borderTopWidth: 0,
                          borderBottomWidth:0
                        },
                        textInput: {
                          marginLeft: -1,
                          marginRight: -1,
                          marginTop: -2,
                          height: 45,
                          color: '#5d5d5d',
                          fontSize: 16,
                          backgroundColor: '#FFF',
                        },
                        predefinedPlacesDescription: {
                          color: '#1faadb'
                        },
                      }}
                        currentLocation={false}
                        // onChangeText={this.onStreetChange.bind(this)}
                        // value={this.props.profileManagmentReducer.street}
                />
                </View>
            </View>
        )
    }
}