import React from 'react'
import ReactSwipe from 'react-swipe'

export default class extends React.Component {
  render() {
    if (!this.props.imgs || this.props.imgs.length < 1) return <div></div>
    return (
      <div>
        <ReactSwipe className="carousel" swipeOptions={{ continuous: false }}>
          <div>PANE 1</div>
          <div>PANE 2</div>
          <div>PANE 3</div>
        </ReactSwipe>
        {
          this.props.imgs.map((item, i) => {
            return (<img key={i} src={item}/>)
          })
        }
        <div></div>
      </div>
    )
  }
}
