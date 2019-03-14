import React, { Component } from 'react';

class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFave: false
        }
    }
    handleClick = (e) => {
        e.stopPropagation()
        this.setState({
            isFave: !this.state.isFave
        })
        console.log("Handling Favorite click!")
    }

    render() {
        let classNameChange
        if (this.state.isFave) {
            classNameChange = "remove_from_queue"
        } else {
            classNameChange = "add_to_queue"
        }
        return (
            <div onClick={this.handleClick} className={`film-row-fave ${classNameChange}`}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Favorite