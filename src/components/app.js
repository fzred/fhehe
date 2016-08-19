import React from 'react'

export default class extends React.Component {
  async getData() {
    const list = await fetch('/api/list').then(res => res.json())
    console.log(list)
  }

  render() {
    this.getData()
    return (<h1>App</h1>)
  }
}
