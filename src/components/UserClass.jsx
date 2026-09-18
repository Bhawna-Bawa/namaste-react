import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count : 0,
        }

        console.log(this.props.name + " Constructor");

    }

    componentDidMount() {
        console.log(this.props.name + " componentDidMount");
    }

    render () {
        console.log(this.props.name + " Render");

        const handleClick = () => {
            this.setState({
                count : this.state.count + 1,
            })
        }

        return (
            <div>
                <button onClick={() => handleClick()}>Click</button>
                {this.state.count }
            </div>
        )
    }
}

export default UserClass;