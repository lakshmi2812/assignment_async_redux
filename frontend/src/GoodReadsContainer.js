import React, {Component} from 'react'
import {connect} from 'react-redux'
import GoodReads from './GoodReads'
import {getInitialGOODREADS} from './actions'


class ApodContainer extends Component {
  componentDidMount() {
    this.props.getInitialGOODREADS()
  }

  // Render is required for all class components
  render() {
    const {goodreads, isFetching} = this.props

    // Manually set the props - the presentational component
    // does not need the getInitialAPOD action since it
    // was already dispatched
    return <GoodReads goodreads={goodreads} isFetching={isFetching} />
  }
}

const mapStateToProps = (state) => {
  return {
    goodreads: state.goodreads,
    isFetching: state.isFetching,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getInitialGOODREADS: () => {
      dispatch(getInitialGOODREADS())
    }
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoodReadsContainer)