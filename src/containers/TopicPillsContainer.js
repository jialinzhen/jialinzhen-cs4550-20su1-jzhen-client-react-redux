import {connect} from 'react-redux';
import TopicPillsComponent from '../components/TopicPillsComponent'
import TopicService from '../services/TopicService'


const stateToPropertyMapper = (state) => {
    return {
        topics: state.topicReducer.topics,
        newTopicTitle: state.topicReducer.newTopicTitle
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createTopicForLesson : (lessonId, topic) => {
            TopicService.createTopic(lessonId, topic).then(newTopic => dispatch({
                type: "CREATE_TOPIC",
                newTopic: newTopic
            }))
        },
        findTopicForLesson : (lessonId) => {
            TopicService.findTopicsForLesson(lessonId).then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                newTopic: topics
            }))
        },
        updateTopicForLesson : (topicId, topic) => {
            TopicService.updateTopic(topicId, topic).then(topic => dispatch({
                type: "UPDATE_TOPIC",
                updatedTopic: topic
            }))
        },
        deleteTopicForLesson : (topicId) => {
            TopicService.deleteTopic(topicId).then(status => dispatch({
                type: 'DELETE_LESSON',
                topicId: topicId
            }))
        }
    }
}

const TopicPillsContainer = connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicPillsComponent)
export default TopicPillsContainer;