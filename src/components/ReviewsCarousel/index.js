// Write your code here
import React, {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentReviewIndex: 0,
  }

  onClickLeftArrow = () => {
    const {currentReviewIndex} = this.state
    if (currentReviewIndex > 0) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state
    if (currentReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex + 1,
      }))
    }
  }

  renderReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="profile-img" />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state
    const currentReview = reviewsList[currentReviewIndex]

    return (
      <div className="carousel-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-card">
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          {this.renderReview(currentReview)}
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
