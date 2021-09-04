import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://ChEdu.at/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}