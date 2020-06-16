import React from 'react';
import './component.css'

class HeadingWidgetComponent extends React.Component {

    state = {
        editingWidget: {}
    }

    changeWidgetType(value) {
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

    changeSizeForWidget(value) {
        let widget = {
            ...this.props.widget,
            size: value
        }
        this.props.changeWidget(widget)
    }




    render() {
        return (
            <div>
                {
                    this.props.preview &&
                    <div className="border-black-5em">
                        <div className="border-black">
                            <div className="container">
                                <h2>{this.props.widget.text ? this.props.widget.text : "Heading text"}</h2>
                            </div>
                        </div>
                    </div>
                }
                {
                    !this.props.preview &&
                    <div className="border-black-5em">
                        <div className="border-black">
                            <div className="container">
                                <div className="form-inline margin-bottom margin-top">
                                    <h3 className="float-left">{this.props.widget.name ? this.props.widget.name :
                                        "Heading Widget"}</h3>
                                    <div className="left-margin-auto d-inline-flex">
                                        {this.props.widget.widgetOrder > 1 &&
                                        <button className="btn btn-warning margin-left-right"
                                                onClick={this.props.widgetPositionUp}>
                                            <i className="fa fa-arrow-up"></i></button>}

                                        {this.props.widget.widgetOrder < this.props.widgetList.length &&
                                        <button className="btn btn-warning margin-left-right"
                                                onClick={this.props.widgetPositionDown}>
                                            <i className="fa fa-arrow-down"></i></button>}
                                        <select className="form-control margin-left-right"
                                                onChange={(e) => this.changeWidgetType(e.target.value)}>
                                            <option value="HEADING" selected>Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                        </select>
                                        <button className="btn btn-danger margin-left-right" onClick={this.props.deletedWidgetFunc}><i
                                            className="fa fa-times"></i></button>
                                    </div>
                                </div>
                                <input className="form-control margin-bottom" placeholder="Heading text"
                                       onChange={(e) => this.changeTextForWidget(e.target.value)} value={this.props.widget.text}/>
                                <select className="form-control margin-bottom" onChange={e => this.changeSizeForWidget(e.target.value)} value={this.props.widget.size}>
                                    <option value="1">
                                        Heading 1
                                    </option>
                                    <option value="2">
                                        Heading 2
                                    </option>
                                    <option value="3">
                                        Heading 3
                                    </option>
                                </select>
                                <input className="form-control margin-bottom" placeholder="Widget Name"
                                       onChange={e => this.changeNameForWidget(e.target.value)} value={this.props.widget.name}/>
                                <h6>Preview</h6>
                                {parseFloat(this.props.widget.size) === 1 && <h1>{this.props.widget.text ? this.props.widget.text : "Heading text"}</h1>}
                                {parseFloat(this.props.widget.size) === 2 && <h2>{this.props.widget.text ? this.props.widget.text : "Heading text"}</h2>}
                                {parseFloat(this.props.widget.size) === 3 && <h3>{this.props.widget.text ? this.props.widget.text : "Heading text"}</h3>}
                            </div>
                        </div>
                    </div>
                }
            </div>

        )
    }
}

export default HeadingWidgetComponent