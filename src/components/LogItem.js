import React from 'react'
import ImgView from './ImgView'
export default class extends React.Component {
  render() {
    return (
      <article>
        <time>{this.props.item.createTime}</time>
        <p>{this.props.item.text}</p>
        <ImgView imgs={this.props.item.imgs}></ImgView>
      </article>
    )
  }
}
