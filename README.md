# webworker-rpc


## Getting Started
install

### Inlined
**Register**

**Execute**

## Features
* remote.xx.xx(): Promise
* @Export/@ExportAll
* @RemoteListener
* rpcPeer.exportProperty().onceReady
* rpcPeer.destroy()
* **object** param (*transferable unsupported*)
* special param (undefined, null)

## Examples

### Build protobuf protocol
```bash
$ yarn global add rimraf protobufjs
$ yarn mkproto
```
编译成功后提交./lib 目录


### Develop Run
yarn dev