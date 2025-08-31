import WebView from "react-native-webview";

export default function App() {
    return <WebView source={{ uri: "naver.com" }} style={{ flex: 1 }} />;
}
