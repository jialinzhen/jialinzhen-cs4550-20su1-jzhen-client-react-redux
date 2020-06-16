import React from 'react'
import './component.css'
class ParagraphWidgetComponent extends React.Component {

    changeWidgetType(value, field) {
        let widget = {
            ...this.props.widget,
            type: value
        }
        this.props.changeWidget(widget);
    }

    changeTextForWidget(value) {
        let widget = {
            ...this.props.widget,
            text: value
        }
        this.props.changeWidget(widget)
    }

    changeNameForWidget(value) {
        let widget = {
            ...this.props.widget,
            name: value
        }
        this.props.changeWidget(widget)
    }



    render() {
        return (
            <div>
                {
                    !this.props.preview &&
                    <div className="border-black-5em">
                        <div className="border-black">
                            <div className="container">
                                <div className="form-inline margin-bottom margin-top">
                                    <h3 className="float-left">{this.props.widget.name ? this.props.widget.name :
                                        "Paragraph Widget"}</h3>
                                    <div className="d-inline-flex left-margin-auto">

                                        {this.props.widget.widgetOrder > 1 &&
                                        <button className="btn btn-warning margin-left-right"
                                                onClick={this.props.widgetPositionUp}>
                                            <i className="fa fa-arrow-up"></i></button>}

                                        {this.props.widget.widgetOrder < this.props.widgetList.length &&
                                        <button className="btn btn-warning margin-left-right"
                                                onClick={this.props.widgetPositionDown}>
                                            <i className="fa fa-arrow-down"></i></button>}

                                        <select className="form-control margin-left-right"
                                                value={this.props.type}
                                                onChange={(e) => this.changeWidgetType(e.target.value)}>
                                            <option value="HEADING">Heading</option>
                                            <option value="PARAGRAPH" selected>Paragraph</option>
                                        </select>
                                        <button className="btn btn-danger margin-left-right"
                                                onClick={this.props.deletedWidgetFunc}>
                                            <i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                                <textarea className="form-control margin-bottom"
                                          onChange={(e) => this.changeTextForWidget(e.target.value)}
                                placeholder="Paragraph Text" value={this.props.widget.text}/>
                                <input className="form-control margin-bottom" placeholder="Widget Name"
                                       onChange={e => this.changeNameForWidget(e.target.value)}
                                       value={this.props.widget.name}/>
                                <h6>Preview</h6>
                                <p className="margin-bottom">{this.props.widget.text ?
                                    this.props.widget.text : "Paragraph Text"}</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.props.preview &&
                    <div className="border-black-5em">
                        <div className="border-black">
                            <p className="margin-bottom">{this.props.widget.text === '' ? 'Paragraph Text' :
                                this.props.widget.text}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}



export default ParagraphWidgetComponent