import React from 'react'
import ReactSwipe from 'react-swipe'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      boxImg: {
        show: false,
        startSlide: 0,
      }
    }
  }

  elSwipe() {
    let elSwipe
    if (this.state.boxImg.show) {
      const boxImg = this.state.boxImg
      elSwipe = (
        <div className="img-box" onTouchTap={this.hideBox.bind(this)}>
          <ReactSwipe
            swipeOptions={{
              continuous: false,
              startSlide: boxImg.startSlide
            }}
          >
            {
              this.props.imgs.map((item, i) => {
                return (<img key={i} src={item}/>)
              })
            }
          </ReactSwipe>
        </div>
      )
    }
    return elSwipe
  }

  render() {
    if (!this.props.imgs || this.props.imgs.length < 1) return <div></div>
    return (
      <div>
        {this.elSwipe()}
        {
          this.props.imgs.map((item, i) => {
            return (
              <img onTouchTap={this.showBox.bind(this, i)} key={i} src={item}/>
            )
          })
        }
      </div>
    )
  }

  hideBox() {
    this.setState({
      boxImg: {
        show: false,
      }
    })
  }

  showBox(i) {
    this.setState({
      boxImg: {
        show: true,
        startSlide: i,
      }
    })
  }
}
