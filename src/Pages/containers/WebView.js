import React from "react";
import { WebView } from "react-native-webview";

class WebViewMobile extends React.Component {
  render() {
    return (
      <WebView source={{ uri: "https://Chedu.at/" }} style={{ flexGrow: 1 }} />
    );
  }
}
export default WebViewMobile;
