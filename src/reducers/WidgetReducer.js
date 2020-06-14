const initialState = {
    widgetType: 'Heading',
    widgets: [],
    preview: false,
    save: false
}


const WidgetReducer = (state=initialState, event) => {
    switch (event.type) {
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    event.newWidget
                ]
            }
            break;
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
            break;
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: event.newWidget
            }
            break;
        default:
            return state;
    }
}

export default WidgetReducer;