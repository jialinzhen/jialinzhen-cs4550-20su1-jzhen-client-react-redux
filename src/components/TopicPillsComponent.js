import React from 'react'
import './component.css'


class TopicPillsComponent extends React.Component {

    state = {

    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <ul className="nav nav-pills wbdv-lesson-tabs margin-top">
                <li className="nav-item">
                    <a className="nav-link active">Topic 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Topic 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 4</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 5</a>
                </li>
                <i className="fa fa-plus fa-2x"></i>
            </ul>
        )
    }
}
export default TopicPillsComponent