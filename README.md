# Native Test

connectNativeの検証リポジトリ。   
この拡張はFirefoxで検証しています。

## 前提
python3をインストールしておいてください。

## 準備（win）
`native_test_win.json`と`test.bat`、`install.reg`のpathを自分のパスに変更。
`install.reg`をダブルクリックしてレジストリに登録。

## 準備（mac）
`native_test_mac.json`のpathを自分のパスに変更。
`native_test_mac.json`を`/Library/Application Support/Mozilla/NativeMessagingHosts/`にコピー

## 実行

about:debugging#/runtime/this-firefox
で拡張をインストールし、調査ボタンを押下。

ツールバーにある四角いボタンをクリックするとメッセージが送信され、結果が帰ってくる。