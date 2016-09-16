import React from 'react'
import { get } from '../common/http'
import LogItem from './LogItem'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
    this.getData()
  }

  async getData() {
    const list = await get('list')
    this.setState({
      list: list
    })
    console.log(list)
  }

  render() {
    return (
      <div>
        <h1 onTouchTap={this.handleTouchTap.bind(this)}>App</h1>
        {
          this.state.list.map((item, i) => {
            return <LogItem key={i} item={item}></LogItem>
          })
        }
      </div>
    )
  }

  handleTouchTap() {
    this.getData()
    console.log('handleTouchTap', Date.now())
  }
}
