import React from 'react'
import TextField from 'material-ui/TextField'
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      pwd: ''
    }

    this.handleChange = (event) => {
      this.setState({
        pwd: event.target.value,
      })
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

  login(e) {
    e.preventDefault()
    console.log('login', this.state.pwd)
  }
}
