const initialState = {
    widgets: [],
    deletedWidget: [],
    preview: false,
}

function indexUp(widgetList, id) {
    let temp = -1;
    for (let i = 0; i < widgetList.length; i++) {
        if(widgetList[i].id === id) {
            temp = widgetList[i].widgetOrder;
            widgetList[i].widgetOrder = widgetList[i].widgetOrder - 1;
            break;
        }
    }

    for(let k = 0; k < widgetList.length; k++) {
        if(widgetList[k].widgetOrder === temp - 1 && widgetList[k].id != id) {
            widgetList[k].widgetOrder = widgetList[k].widgetOrder + 1;
            break;
        }
    }
    return widgetList;
}

function indexDown(widgetList, id) {
    let temp2 = - 1;
    for (let j = 0; j < widgetList.length; j++) {
        if(widgetList[j].id === id) {
            temp2 = widgetList[j].widgetOrder;
            widgetList[j].widgetOrder = widgetList[j].widgetOrder + 1;
        }
    }

    for(let l = 0; l < widgetList.length; l++) {
        if(widgetList[l].widgetOrder === temp2 + 1 && widgetList[l].id != id) {
            widgetList[l].widgetOrder = widgetList[l].widgetOrder - 1;
        }
    }
    return widgetList;
}

const WidgetReducer = (state=initialState, event) => {
    switch (event.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    event.newWidget
                ]
            }
            break;
        case "DELETE_WIDGET_FRONTEND":

            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== event.widgetId),
                deletedWidget: [
                    ...state.deletedWidget,
                    event.widgetId
                ]
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== event.widgetId)
            }
            break;
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === event.updatedWidget.id ?
                        event.updatedWidget : widget )
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: event.newWidget
            }
            break;
        case "PREVIEW_EXECUTE":
            return {
                ...state,
                preview: event.preview
            }
            break;
        case "WIDGET_POSITION_UP":

            let widgets = indexUp(state.widgets, event.widget.id)

            return {
                ...state,
                widgets: [...widgets]
            }
            break;
        case "WIDGET_POSITION_DOWN":

            let widget2 = indexDown(state.widgets, event.widget.id)

            return {
                ...state,
                widgets: [...widget2]

            }
            break;
        default:
            return state;
    }
}

export default WidgetReducer;