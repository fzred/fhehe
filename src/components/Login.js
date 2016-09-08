import React from 'react'
import TextField from 'material-ui/TextField'
import { post } from '../common/http'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      pwd: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.login.bind(this)}>
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

  async login(e) {
    e.preventDefault()
    post('login?af=1', { name: this.state.pwd })
    console.log('login', this.state.pwd)
  }
}
