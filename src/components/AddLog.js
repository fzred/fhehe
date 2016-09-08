import React from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import { post } from '../common/http'

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
      imgs: [
        'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58',
        'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58',
        'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197422931,3992689016&fm=58',
      ]
    }
  }

  render() {
    return (
      <form className="from">
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
            {this.state.imgs.map(
              (item, i) => <img key={i} src={item}/>
            )}
          </div>
        </div>
        <RaisedButton
          label="提 交"
          primary={true}
          fullWidth={true}
          onTouchTap={this.sub.bind(this)}
        />
      </form>
    )
  }

  handleChange(event) {
    this.setState({
      pwd: event.target.value,
    })
  }

  async sub() {
    console.log('sub')
    const result = await post('', {
      content: this.state.content,
      date: this.state.date,
      imgs: this.state.imgs,
    })
    console.log(result)
  }
}
