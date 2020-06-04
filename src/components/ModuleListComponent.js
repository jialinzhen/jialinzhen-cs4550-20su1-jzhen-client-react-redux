import React from "react";

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'some other module',
        editingModule: {}
    }

    componentDidMount() {
        this.props.findAllModules()
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.modules.map(module =>
                                <li key={module._id} className="list-group-item">
                                    {
                                        this.state.editingModule._id === module._id &&
                                        <span>
                    <input onChange={(e) => {
                        const newTitle = e.target.value
                        this.setState(prevState => ({
                            editingModule: {
                                ...prevState.editingModule,
                                title: newTitle
                            }
                        }))
                    }}
                           value={this.state.editingModule.title}/>
                                            <div className="float-right">
                                               <i className="fa fa-times"
                                                  onClick={() => this.props.deleteModule(module._id)}></i>
                        <i className="fa fa-check" onClick={() => {
                            this.props.updateModule(this.state.editingModule._id, this.state.editingModule)
                            this.setState({editingModule: {}})
                        }}></i>
                                            </div>
                    </span>
                                    }
                                    {
                                        this.state.editingModule._id !== module._id &&
                                        <span>
                      {module.title}
                                            <i className="fa fa-pencil float-right"
                                               onClick={() => this.setState({editingModule: module})}></i>
                  </span>
                                    }
                                </li>
                        )
                    }
                    <li className="list-group-item"><i onClick={() => this.props.createModule({
                        title: "New Module"
                    }, this.props.params.courseId)} className="fa fa-plus"></i></li>
                </ul>
            </div>
        )
    }
}

export default ModuleListComponent
