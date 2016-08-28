import React from 'react'
import TextField from 'material-ui/TextField'
import { get, post } from '../common/http'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      pwd: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.sub.bind(this)}>
        <TextField
          hintText="输入点内容"
          multiLine={true}
          fullWidth={true}
          rows={2}
          rowsMax={5}/>
        <TextField
          hintText="输入点东西"
          fullWidth={true}
          value={this.state.pwd}
          onChange={this.handleChange.bind(this)}
        />
      </form>
    )
  }

  handleChange(event) {
    this.setState({
      pwd: event.target.value,
    })
  }

  async sub(e) {
    e.preventDefault()
  }
}
