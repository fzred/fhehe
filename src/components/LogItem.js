import React from 'react'
import ImgView from './ImgView'
import { formatDate } from '../common/util'

export default class extends React.Component {
  render() {
    return (
      <article>
        <time>{formatDate(this.props.item.createTime)}</time>
        <p>{this.props.item.text}</p>
        <ImgView imgs={this.props.item.imgs}></ImgView>
      </article>
    )
  }
}
