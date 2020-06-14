import React from 'react'
import './component.css'

const ParagraphWidget = (props) =>
    <div className="border-black-5em">
        <div className="border-black">
            <div className="container">
                <div className="form-inline margin-bottom margin-top">
                    <h3 className="float-left">Paragraph Widget</h3>
                    <div className="d-inline-flex left-margin-auto">
                        <button className="btn btn-warning margin-left-right"><i className="fa fa-arrow-up"></i></button>
                        <button className="btn btn-warning margin-left-right"><i className="fa fa-arrow-down"></i></button>
                        <input className="form-control margin-left-right"/>
                        <button className="btn btn-danger margin-left-right"><i className="fa fa-times"></i></button>
                    </div>
                </div>
                <textarea className="form-control margin-bottom" />
                <input className="form-control margin-bottom" placeholder="Widget Name"/>
                <h6>Preview</h6>
                <span className="margin-bottom">Heading text</span>
            </div>
        </div>
    </div>

export default ParagraphWidget