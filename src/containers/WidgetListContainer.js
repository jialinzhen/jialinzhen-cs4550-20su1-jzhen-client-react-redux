import React from 'react'
import {connect} from 'react-redux'
import HeadingWidgetComponent from "../components/HeadingWidgetComponent";
import ParagraphWidgetComponent from "../components/ParagraphWidgetComponent";
import WidgetService from "../services/WidgetService";
import { v4 as uuidv4 } from 'uuid';

class WidgetListContainer extends React.Component {

    constructor(props){
        super(props);
        this.SaveAll = this.SaveAll.bind(this);
    }

    componentDidMount() {
        this.props.findAllWidgetForTopic(this.props.topicId)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.topicId != nextProps.topicId) {
            this.props.findAllWidgetForTopic(nextProps.topicId);
        }
    }

    SaveAll() {
        if(this.props.widgetList) {
            this.props.widgetList.map(widget => {
                widget.id = 1;
                this.props.createWidget(this.props.topicId, widget)
            })
        }
        if(this.props.deletedWidget) {
            this.props.deletedWidget.map(id => {
                this.props.deleteWidget(id);
            })
        }
    }

    addDefaultWidget(topicId, widgetList) {

        let widget = {
            id: uuidv4(),
            name: '',
            type: 'HEADING',
            topicId: topicId,
            widgetOrder: widgetList.length + 1,
            text: '',
            srcUrlHref: "",
            value: "",
            size: 1,
            width: 100,
            height: 100,
            cssClass: '',
            style: ''
        }
        this.props.createWidgetForFrontend(this.props.topicId, widget);
    }

    render() {

        let widgetList = this.props.widgetList.sort((a,b) => a.widgetOrder - b.widgetOrder)

        console.log(widgetList);

        return (
            <div>
                <div className="row big-margin">

                    {
                        this.props.preview &&
                        <i className="fa fa-toggle-on fa-2x float-right"
                           onClick={() => this.props.executePreview(false)}></i>
                    }
                    {
                        !this.props.preview &&
                        <i className="fa fa-toggle-off fa-2x float-right"
                           onClick={() => this.props.executePreview(true)}></i>
                    }
                        Preview
                        <button className="btn btn-success float-right"
                                onClick={this.SaveAll}>Save</button>
                </div>
                {
                    widgetList.map(widget =>
                        {
                            if(widget.type === "PARAGRAPH") {
                                return <ParagraphWidgetComponent preview={this.props.preview}
                                                                 changeWidget={(e) => this.props.updateWidgetFrontend(e)}
                                                                 widget={widget}
                                                                 widgetList={this.props.widgetList}
                                                                 widgetPositionUp={() => this.props.widgetPositionUp(widget)}
                                                                 widgetPositionDown={() => this.props.widgetPositionDown(widget)}
                                                                 deletedWidgetFunc={() => this.props.deleteWidgetFrontend(widget.id)}
                                />
                            } else {
                                return <HeadingWidgetComponent preview={this.props.preview}
                                                               changeWidget={(e) => this.props.updateWidgetFrontend(e)}
                                                               widget={widget}
                                                               widgetList={this.props.widgetList}
                                                               widgetPositionUp={() => this.props.widgetPositionUp(widget)}
                                                               widgetPositionDown={() => this.props.widgetPositionDown(widget)}
                                                               deletedWidgetFunc={() => this.props.deleteWidgetFrontend(widget.id)}
                                />
                            }
                        }
                    )
                }
                <div>
                    <button className="btn btn-danger topic-row float-right"
                            onClick={() => this.addDefaultWidget(this.props.topicId, this.props.widgetList)}>
                        <i className="fa fa-plus fa-2x"></i>
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        widgetList: state.WidgetReducer.widgets,
        preview: state.WidgetReducer.preview,
        deletedWidget: state.WidgetReducer.deletedWidget
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
        },
        executePreview: (preview) => dispatch({type: "PREVIEW_EXECUTE", preview: preview}),
        createWidgetForFrontend: (topicId, widget) => dispatch({type: "CREATE_WIDGET", newWidget: widget}),
        updateWidgetFrontend: (widget) => dispatch({type: "UPDATE_WIDGET", updatedWidget: widget}),
        deleteWidgetFrontend: (id) => dispatch({type: "DELETE_WIDGET_FRONTEND", widgetId: id}),
        widgetPositionUp: (widget) => dispatch({type: "WIDGET_POSITION_UP", widget: widget}),
        widgetPositionDown: (widget) => dispatch({type: "WIDGET_POSITION_DOWN", widget: widget})
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListContainer);