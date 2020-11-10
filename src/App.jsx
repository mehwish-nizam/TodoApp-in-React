import React from 'react';
import './App.css';
import {Button, Modal} from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {BsThreeDotsVertical} from 'react-icons/bs';


class App extends React.Component {
  constructor(){
    super();
    this.state = { 
           
      Column:[    
            {
        editingColumnName : false,
        AddTask: false,
        ColumnName : "First",
        todos: [{title: "Task1"},{title: "Task2"}],
        newtitle: "",
        
        }
      ],
      AddnewColumnPopup: false,
      newColumntitle : ""
    }
  }
  handleModal(){
    this.state.AddnewColumnPopup= !this.state.AddnewColumnPopup
    this.setState({})
  }
  handleTaskModal(index){
    this.state.Column[index].AddTask= !this.state.Column[index].AddTask
    this.setState({})
  }
  addColumn(){
    
    let obj = {
        editingColumnName : false,
        AddTask: false,
        ColumnName : this.state.newColumntitle,
        todos: [],
        newtitle: "",
        
    }
   
    this.state.Column.push(obj);
    this.state.AddnewColumnPopup = false;
    this.state.newColumntitle = "";
    this.setState({})

  }
  editColumnName(index){
    
    this.state.Column[index].editingColumnName = !(this.state.Column[index].editingColumnName);
    
    this.setState({
      
        
    })
  }
  addTask(index){
    
    if(this.state.Column[index].newtitle!= ""){
      
    let obj = {title : this.state.Column[index].newtitle/*, description : this.state.Column[index].newdescription*/}
    this.state.Column[index].todos.push(obj);
    this.state.Column[index].AddTask= !this.state.Column[index].AddTask;
    this.state.Column[index].newtitle= "";
    this.setState({})
    }
    else{
      alert("Task title cannot be empty");
    }
    
  }
  deleteColumn(index){
    this.state.Column.splice(index,1)
    this.setState({Column: this.state.Column})
  }
 
  render(){
  return (
    <div>
      <h1>TodoApp</h1>
      {
        
    (this.state.Column.length!=0)?
    <div className = "main">
      
      <ul className = "list-unstyled list-inline">
          { 
            
            
        (this.state.Column).map((val,index)=>{
          return <li className = "list-inline-item" key = {index}>
            

      

    <div className='todo-app'>
      <div className = "column shadow-lg p-3 mb-5 bg-white rounded">
        <div>
          {!(this.state.Column[index].editingColumnName)?<h5>{this.state.Column[index].ColumnName}</h5>:<input value = {this.state.Column[index].ColumnName}  onChange = {(e) => {
            this.state.Column[index].ColumnName = e.target.value;
            this.state.newColumntitle = "";
            this.setState({});}} type = "text" ></input>}
          <MdDelete onClick = {()=>this.deleteColumn(index)}  className = "icon deleteIcon"></MdDelete>
          <FaEdit onClick = {()=>this.editColumnName(index)} className = "icon editIcon"></FaEdit>
        </div><br></br>

      
      <div>
        <ul>
          { 
            
        (this.state.Column[index].todos).map((v,i)=>{
          return <li className = "todolistitems" key = {i}>
            <BsThreeDotsVertical></BsThreeDotsVertical>
            
            <h6 className = "heading6">{v.title}</h6>
            
          </li>
        })
      }
      </ul>

</div>
       
      <div className = "AddBtnDiv">
       <Button onClick = {()=>this.handleTaskModal(index)} className = " btn-success">+ Task</Button>
      </div>
</div>

      





        <Modal show = {this.state.Column[index].AddTask} onHide = {()=>this.handleTaskModal(index)}>
          <Modal.Header closeButton >Add New Task </Modal.Header>
          <Modal.Body>
            <input value = {this.state.Column[index].newtitle} onChange = {(e) => {
              this.state.Column[index].newtitle = e.target.value;this.setState({})}
            }  width = "80" placeholder = "Title " type="text"/>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick = {()=>this.handleTaskModal(index)} className = "btn-danger">Cancel</Button>
            <Button onClick = {()=>this.addTask(index)} className = "btn-success Add">Add Task</Button>
          </Modal.Footer>
        </Modal>
    </div>


    </li>
        })
      }
    </ul>
  
  </div>:
  <div>
  
  </div>}
  <Button className = "newcolbtn" onClick = {()=>this.handleModal()}>Add New List</Button> 
        <Modal show = {this.state.AddnewColumnPopup} onHide = {()=>this.handleModal()}>
          <Modal.Header closeButton >Add New Column</Modal.Header>
          <Modal.Body>
            <input value = {this.state.newColumntitle} onChange = {(e) => {
              this.state.newColumntitle = e.target.value;
              this.setState({})}} width = "80" placeholder = "Title of the column" type="text"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick = {()=>this.handleModal()} className = "btn-danger">Cancel</Button>
            <Button onClick = {()=>this.addColumn()} className = "btn-success">Add New Column</Button>
          </Modal.Footer>
        </Modal>

  </div>
  );
}

}



export default App;