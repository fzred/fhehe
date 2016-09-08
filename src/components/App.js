import React from 'react'

export default class extends React.Component {
  async getData() {
    const list = await fetch('/api/list').then(res => res.json())
    console.log(list)
  }

  render() {
    this.getData()
    return (
      <div>
        <h1 onTouchTap={this.handleTouchTap}
            onClick={this.handleClick}>App</h1>
      </div>
    )
  }

  handleTouchTap() {
    console.log('handleTouchTap', Date.now())
  }

  handleClick() {
    console.log('handleClick', Date.now())
  }
}
