'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Twilio = require('react-native-twilio');
var Progress = require('react-native-progress');


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


  _makeCall: function() {
    console.log('Here')
    Twilio.connect({To: '+16472780938', From:"client:+16472780938"});
  },


  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.dialPad}>
          <View style={styles.dialPadRow}>
            <View style={styles.dialPadKey}>
              <Text style={styles.dialPadNumber1}>1</Text>
            </View>
            <View style={styles.dialPadKey}>
              <Text style={styles.dialPadNumber}>2</Text>
            </View>
            <View style={styles.dialPadKey}>
              <Text style={styles.dialPadNumber}>3</Text>
            </View>
          </View>
          <Progress.Circle size={30} indeterminate={false} showsText={true}/>
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
    backgroundColor: '#F5FCFF',
  },
  dialPadRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dialPadNumber: {
    backgroundColor: 'red',
    width : 80,
    height: 80,
    marginRight: 10,
    borderRadius: 80/2,
    color: 'black'
  },
  dialPadKey: {
  },
});

AppRegistry.registerComponent('WeeFeePhone', () => WeeFeePhone);
