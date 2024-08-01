import { Component } from "react";

class MouseTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            input: '',
        }
    }
    HandleMouseMove = (event) => {
        console.log(event.clientX, '  :: y: ', event.clientY);
        this.setState({ x: event.clientX, y: event.clientY })
    }
    handleOnChange = (e) => {
        this.setState({input: e.target.value});
    }
    render() {
        return (
            <>
                <h1>MouseTracker</h1>
                <div className='mouseTracker' onMouseMove={this.HandleMouseMove}>
                    {this.props.render(this.state)}
                </div>
                <input
                    type='text'
                    placeholder='Text'
                    onChange={this.handleOnChange}
                />

            </>
        );
    }
};
export default MouseTracker;