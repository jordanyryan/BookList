import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>
    }
    return(
      <div className="book-detail">
        Title: {this.props.book.title}
        <br />
        Pages: {this.props.book.pages}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.active_book
  }
}


export default connect(mapStateToProps)(BookDetail)