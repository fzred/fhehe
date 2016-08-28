import React from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { get, post } from '../common/http'

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
}
const style = {
  marginRight: 20,
}
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      content: `Am I in too deep?
我是不是深陷爱里
Have I lost my mind?
已经有些失控？
I don't care...
我都不在乎
You're here, tonight.
今夜你就在这里`,
      date: new Date(),
    }
  }

  render() {
    return (
      <form className="from" onSubmit={this.sub.bind(this)}>
        <TextField
          hintText="输入点内容"
          multiLine={true}
          fullWidth={true}
          rows={2}
          rowsMax={5}
          value={this.state.content}
        />
        <DatePicker
          hintText="发生时间"
          defaultDate={this.state.date}
        />
        <div className="choose-img">
          <RaisedButton label="上传图片"/>
          <div className="choose-img-list">
            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58"/>
            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58"/>
            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58"/>
            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58"/>
            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58"/>
            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58"/>
          </div>
        </div>
        <RaisedButton
          label="提 交"
          primary={true}
          fullWidth={true}
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
