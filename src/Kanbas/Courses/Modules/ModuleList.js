import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaEllipsisVertical } from 'react-icons/fa6';
import { FaGripVertical } from 'react-icons/fa6';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const handleDeleteModule = async (moduleId) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  return (
    <div style={{"padding" : "10px"}} className="wd-flex-column-container" >
        <div style={{"textAlign" : "right"}}>
            <button className="btn btn-secondary wd-gray-button">Collapse All</button>
            <button className="btn btn-secondary wd-gray-button">View Progress</button>
            <div className="dropdown" style={{"display": "inline"}}>
            <button className="btn btn-secondary dropdown-toggle wd-gray-button" type="button" data-bs-toggle="dropdown">Publish All</button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Publish All</a></li>
                <li><a className="dropdown-item" href="#">Publish All Modules and Items</a></li>
                <li><a className="dropdown-item" href="#">Publish Modules Only</a></li>
                <li><a className="dropdown-item" href="#">Unpublish All</a></li>
            </ul>
            </div>
            <button className="btn btn-secondary wd-red-button">Module</button>
            <button className="btn btn-secondary wd-gray-button"><FaEllipsisVertical/></button>
            <hr/>
        </div>
        <ul className="list-group">
        <li className="list-group-item">
            <div className="mt-2 mb-2" style={{"max-width": "406px"}}>
                <input value={module.name} className="form-control" title="Module Name"
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
                <textarea value={module.description} className="form-control" title="Module Description"
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>
                <button className="btn btn-secondary" style={{"width" : "50%", "background-color" : "green"}} 
                    onClick={() => handleAddModule()}>Add</button>
                <button className="btn btn-secondary wd-gray-button" style={{"width" : "50%"}}
                    onClick={() => handleUpdateModule()}>Update</button>
            </div>
        </li>
        {modules.filter((module) => module.course === courseId).map((module, index) => (
            <li key={index} className="list-group-item">
                <div className="float-end">
                    <button className="btn btn-secondary wd-gray-button" onClick={() => dispatch(setModule(module))}> Edit </button>
                    <button className="btn btn-secondary wd-red-button" onClick={() => handleDeleteModule(module._id)}> Delete </button>
                </div>
                <h4 className = "wd-raise-icons ps-1"><FaGripVertical/><span className = "ps-3">{module.name}</span></h4>
                <p className="ms-2">{module.description}</p>
            </li>
        ))
        }
        </ul>
    </div>
  );
}
export default ModuleList