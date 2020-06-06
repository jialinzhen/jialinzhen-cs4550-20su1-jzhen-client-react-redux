import React from "react";

import {Link} from 'react-router-dom'

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'some other module',
        editingModule: {},
        selectedModuleId: null
    }

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId);
    }

    changeModuleName = (e) => {
        const newTitle = e.target.value
        this.setState(prevState => ({
            editingModule: {
                ...prevState.editingModule,
                title: newTitle
            }
        }))
    }

    updateModule = () => {
        this.props.updateModule(this.state.editingModule._id, this.state.editingModule)
        this.setState({editingModule: {}})
    }

    setSelectedModule = (id) => {
        this.setState({
            selectedModuleId: id
        })
    }

    render() {
        let newModule = {title: "New Module"};

        let moduleList = this.props.modules;
        moduleList.forEach(module => {
            if(module._id === this.state.selectedModuleId) {
                module['css'] = "list-group-item bg-primary"
            } else {
                module['css'] = "list-group-item"
            }
        })

        return (
            <div>
                <ul className="list-group">
                    {
                        moduleList.map(module =>
                                    <li key={module._id} className={module.css}
                                    onClick={() => this.setSelectedModule(module._id)}>
                                    {
                                        this.state.editingModule._id === module._id &&
                                        <span>
                    <input onChange={(e) => this.changeModuleName(e)}
                           value={this.state.editingModule.title}/>
                                            <div className="float-right">
                                               <i className="fa fa-times"
                                                  onClick={() => this.props.deleteModule(module._id)}></i>
                        <i className="fa fa-check" onClick={this.updateModule}></i>
                                            </div>
                    </span>
                                    }
                                    {
                                        this.state.editingModule._id !== module._id &&
                                        <span>
                                            <Link to={`/course/${this.props.courseId}/module/${module._id}`}>{module.title}</Link>
                                            <i className="fa fa-pencil float-right"
                                               onClick={() => this.setState({editingModule: module})}></i>
                  </span>
                                    }
                                    </li>
                        )
                    }
                    <li className="list-group-item">
                        <i onClick={() => this.props.createModule(newModule, this.props.courseId)}
                           className="fa fa-plus"></i></li>
                </ul>
            </div>
        )
    }
}

export default ModuleListComponent
