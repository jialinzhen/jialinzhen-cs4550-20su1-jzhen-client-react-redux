import React from 'react'
import './component.css'
import {Link} from 'react-router-dom'

class TopicPillsComponent extends React.Component {

    state = {
        editingTopic: {},
        selectedTopicId: null
    }

    componentDidMount() {
        this.props.findTopicForLesson(this.props.lessonId)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.lessonId != nextProps.lessonId) {
            this.props.findTopicForLesson(nextProps.lessonId);
        }
    }

    changeTopicName = (e) => {
        const newTitle = e.target.value
        this.setState(prevState => ({
            editingTopic: {
                ...prevState.editingTopic,
                title: newTitle
            }
        }))
    }

    updateTopic = () => {
        this.props.updateTopicForLesson(this.state.editingTopic._id,
            this.state.editingTopic);
        this.setState({
            editingTopic: {}
        })
    }

    render() {
        let topicList = this.props.topics;
        topicList.forEach(topic => {
            if(topic._id === this.state.selectedTopicId) {
                topic['css'] = "nav-item bg-primary"
            } else {
                topic['css'] = "nav-item"
            }
        })


        return (
            <ul className="nav nav-pills wbdv-lesson-tabs margin-top">
                {
                    this.props.topics.map(topic =>
                        <li className={topic.css} onClick={() => this.setState({selectedTopicId: topic._id})}>

                            {
                                this.state.editingTopic._id === topic._id &&
                                    <span>
                        <input onChange={(e) => this.changeTopicName(e)}
                               value={this.state.editingTopic.title}/>
                                                <div className="float-right">
                                                   <i className="fa fa-times"
                                                      onClick={() => this.props.deleteTopicForLesson(topic._id)}>
                                                   </i>
                            <i className="fa fa-check" onClick={() => this.updateTopic()}>

                            </i>
                                                </div>
                                    </span>
                            }

                            {
                                this.state.editingTopic._id != topic._id &&
                                <a className="nav-link">
                                    <Link to={`/course/${this.props.courseId}/module/${this.props.modulesId}/lesson/${this.props.lessonId}/topic/${topic._id}`}>
                                        {topic.title}
                                    </Link>
                                    <i className="fa fa-pencil"
                                       onClick={() => this.setState({
                                           editingTopic: topic
                                       })}>

                                    </i>
                                </a>
                            }
                        </li>
                    )
                }
                <i className="fa fa-plus fa-2x" onClick={() => this.props.createTopicForLesson(this.props.lessonId,
                    {title: 'Some Topic'})}></i>
            </ul>
        )
    }
}
export default TopicPillsComponent