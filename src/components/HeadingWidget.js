import React from 'react';
import './component.css'

const HeadingWidget = (props) =>
    <div className="border-black-5em">
        <div className="border-black">
            <div className="container">
                <div className="form-inline margin-bottom margin-top">
                    <h3 className="float-left">Heading Widget</h3>
                    <div className="left-margin-auto d-inline-flex">
                        <button className="btn btn-warning margin-left-right"><i className="fa fa-arrow-up"></i></button>
                        <button className="btn btn-warning margin-left-right"><i className="fa fa-arrow-down"></i></button>
                        <input className="form-control margin-left-right"/>
                        <button className="btn btn-danger margin-left-right"><i className="fa fa-times"></i></button>
                    </div>
                </div>
                <input className="form-control margin-bottom" placeholder="Heading text"/>
                <select className="form-control margin-bottom">
                    <option>
                        Heading 1
                    </option>
                    <option>
                        Heading 2
                    </option>
                    <option>
                        Heading 3
                    </option>
                </select>
                <input className="form-control margin-bottom" placeholder="Widget Name"/>
                <h6>Preview</h6>
                <h2>Heading text</h2>
            </div>
        </div>
    </div>

export default HeadingWidget