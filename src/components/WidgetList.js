import React from 'react'
import {connect} from 'react-redux'
import ModuleService from "../services/ModuleService";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import WidgetService from "../services/WidgetService";


class WidgetList extends React.Component {

    componentDidMount() {
        this.props.findAllWidgetForTopic(this.props.topicId)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.topicId != nextProps.topicId) {
            this.props.findAllWidgetForTopic(nextProps.topicId);
        }
    }

    render() {
        return (
            <div>
                <div>
                    <i className="fa fa-toggle-off fa-2x float-right"></i>
                    <div className="float-right">Preview</div>
                    <button className="btn btn-success float-right">Save</button>
                </div>
                {
                    this.props.widgetList.map(widget =>
                        {
                            if(widget.type === "PARAGRAPH") {
                                return <ParagraphWidget/>
                            } else {
                                return <HeadingWidget/>
                            }
                        }
                    )
                }
                <button className="btn btn-danger topic-row float-right">
                    <i className="fa fa-plus fa-2x"></i></button>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        widgetList: state.WidgetReducer.widgets,
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllWidgetForTopic: (topicId) => {
            WidgetService.findWidgetForTopic(topicId)
                .then(newWidgetForTopic => dispatch({
                    type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                    newWidget: newWidgetForTopic
                }))
        },
        updateWidget: (widgetId, newWidgetData) => {
            WidgetService.updateWidget(widgetId, newWidgetData)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    updatedWidget: newWidgetData
                }))
        },
        createWidget: (topicId, newWidget) => {
            WidgetService.createWidget(topicId, newWidget)
                .then(actualWidget => dispatch({
                    type: "CREATE_WIDGET",
                    newWidget: actualWidget
                }))
        },
        deleteWidget: (widgetId) => {
            WidgetService.deleteWidget(widgetId)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetId: widgetId
                }))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetList);