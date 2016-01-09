'use strict';

var React = require('react-native');
var {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  TouchableWithoutFeedback,
} = React;

var Twilio = require('react-native-twilio');
var Icon = require('react-native-vector-icons/FontAwesome');



var WeeFeePhone = React.createClass({

  componentWillMount: function() {
    Twilio.initWithTokenUrl('http://weefeephone.herokuapp.com/token');
    // Twilio.addEventListener('deviceDidStartListening', this._deviceDidStartListening);
    // Twilio.addEventListener('deviceDidStopListening', this._deviceDidStopListening);
    // Twilio.addEventListener('deviceDidReceiveIncoming', this._deviceDidReceiveIncoming);
    // Twilio.addEventListener('connectionDidStartConnecting', this._connectionDidStartConnecting);
    // Twilio.addEventListener('connectionDidConnect', this._connectionDidConnect);
    // Twilio.addEventListener('connectionDidDisconnect', this._connectionDidDisconnect);
    // Twilio.addEventListener('connectionDidFail', this._connectionDidFail);
  },


  getInitialState: function() {
    return {
            displayNumber: [6,4,7,2,7,8,0,9,3,8],
           }
  },


  _makeCall: function() {
    var number = this.state.displayNumber.join('');
    Twilio.connect({To: '+1'+number, From:"client:+16472780938"});
  },


  _onPressButton: function(keyId) {
    var currentState = this.state.displayNumber;
    currentState.push(keyId);
    this.setState({displayNumber: currentState})
  },


  render: function() {
    return (
      <View style={styles.container}>

        <View style={styles.phoneNumber}>
          <Text style={styles.displayNumber}>{this.state.displayNumber}</Text>
        </View>

        <View style={styles.dialPad}>
          <View style={styles.dialPadRow}>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(1)}>
              <View style={[styles.dialPadKey, {marginRight: 25}]}>
                <Text style={styles.dialPadNumber}>1</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(2)}>
              <View style={[styles.dialPadKey, {marginRight: 25}]}>
                <Text style={styles.dialPadNumber}>2</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(3)}>
              <View style={[styles.dialPadKey, {marginRight: 0}]}>
                <Text style={styles.dialPadNumber}>3</Text>
              </View>
            </TouchableWithoutFeedback>

          </View>

          <View style={styles.dialPadRow}>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(4)}>
              <View style={[styles.dialPadKey, {marginRight: 25}]}>
                <Text style={styles.dialPadNumber}>4</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(5)}>
              <View style={[styles.dialPadKey, {marginRight: 25}]}>
                <Text style={styles.dialPadNumber}>5</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(6)}>
              <View style={[styles.dialPadKey, {marginRight: 0}]}>
                <Text style={styles.dialPadNumber}>6</Text>
              </View>
            </TouchableWithoutFeedback>

          </View>


          <View style={styles.dialPadRow}>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(7)}>
              <View style={[styles.dialPadKey, {marginRight: 25}]}>
                <Text style={styles.dialPadNumber}>7</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(8)}>
              <View style={[styles.dialPadKey, {marginRight: 25}]}>
                <Text style={styles.dialPadNumber}>8</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(9)}>
              <View style={[styles.dialPadKey, {marginRight: 0}]}>
                <Text style={styles.dialPadNumber}>9</Text>
              </View>
            </TouchableWithoutFeedback>

          </View>


          <View style={styles.dialPadRow}>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))('*')}>
              <View style={[styles.dialPadKey, {marginRight: 25}]}>
                <Text style={styles.dialPadNumber}>*</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))(0)}>
              <View style={[styles.dialPadKey, {marginRight: 25}]}>
                <Text style={styles.dialPadNumber}>0</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={((keyId)=> () => this._onPressButton(keyId))('#')}>
              <View style={[styles.dialPadKey, {marginRight: 0}]}>
                <Text style={styles.dialPadNumber}>#</Text>
              </View>
            </TouchableWithoutFeedback>

          </View>

          <View style={styles.dialPadRow}>

            <View style={[styles.dialPadKey, {marginRight: 25}]}></View>

            <TouchableWithoutFeedback
                activeOpacity={0}
                underlayColor={"#eee"}
                onPress={this._makeCall}>
              <View style={[styles.dialPadKey, {marginRight: 25,}]}>
                <Icon
                  name="phone"
                  size={40}
                  color="#000"
                  style={[styles.dialPadNumber, styles.callButton]}/>
              </View>
            </TouchableWithoutFeedback>

            <View style={[styles.dialPadKey, {marginRight: 25}]}></View>

          </View>

        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dialPadRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
    marginBottom: 10,
    flex: 1,
  },
  dialPadKey: {
    width: 75,
    height: 75,
    overflow: 'hidden',
    flex: 1,
    alignSelf: 'auto',
    padding: 5,
  },
  dialPadNumber: {
    overflow: 'hidden',
    flex:1,
    borderRadius: 33,
    textAlign: 'center',
    alignItems:'center',
    fontSize: 38,
    paddingTop: 10,
    borderColor: '#686869',
    color: '#737778',
    borderWidth: 1,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  callButton: {
    backgroundColor: '#4CDA64',
    color: '#fff',
    borderWidth: 0,
    marginTop: 1,
  },
});

AppRegistry.registerComponent('WeeFeePhone', () => WeeFeePhone);
