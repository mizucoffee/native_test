/*
 拡張機能が有効化された時に接続する
 */
var port = browser.runtime.connectNative("native_test");

/*
 メッセージをアプリから受け取った時の処理
 */
port.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

/*
 ブラウザ拡張のボタンを押した時にpingを送信
 */
browser.browserAction.onClicked.addListener(() => {
  console.log("Sended: ping")
  port.postMessage("ping");
});