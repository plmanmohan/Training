import { connect } from "react-redux";
import { setFilter } from "../actions";
import { Component } from "react";

class FilterClass extends Component {
    render() {
        return (
            <div className="filter-buttons">
                <button onClick={() => (this.props.setFilterProps('ALL'))} disabled={this.props.filter === 'ALL'} >All</button>
                <button onClick={() => (this.props.setFilterProps('COMPLETED'))} disabled={this.props.filter === 'COMPLETED'}>Completed</button>
                <button onClick={() => (this.props.setFilterProps('INCOMPLETED'))} disabled={this.props.filter === 'INCOMPLETED'}>InCompleted</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filter: state.filter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterProps: (filter) => dispatch(setFilter(filter)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterClass);