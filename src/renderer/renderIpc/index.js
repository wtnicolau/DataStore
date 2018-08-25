import {ipcRenderer} from 'electron'

export default function ($store) {
  ipcRenderer.on('objectStore', (e, msg) => {
    $store.dispatch('creator/buildObject', msg).then(r => {
      console.log(r)
    })
  })
}
