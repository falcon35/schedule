import React,{Component} from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';
import  'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";
class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  };

   handleChange=e=>{
    this.setState(
      {
        item:e.target.value
      }
    );
  }
  handleSubmit=(e)=>{
    e.preventDefault();
   const newitem={
     id:this.state.id,
     title:this.state.item
   }
   const updateditems=[...this.state.items,newitem];
   this.setState(
     {
       items:updateditems,
       item:'',
       id:uuid(),
       editItem:false
     }
   );
  }
  clearList=()=>{
    this.setState(
      {items:[]}
    )
  }
  handleDelete=id=>{
    const filtereditem=this.state.items.filter(item=>
      item.id!==id);
      this.setState(
        {items:filtereditem}
      )
  }

  handleEdit=id=>{
    const filtereditem=this.state.items.filter(item=>
      item.id!==id);
      const selecteditem=this.state.items.find(item=>item.id===id);
      this.setState(
        {items:filtereditem,
          item:selecteditem.title,
          editItem:true,
          id:id
        }
      )
  }
  render(){
  return (
    <div className="container">
      <div className="row">
      <div className="col-10 col-md-8 mx-auto mt-4">
      <h3 className="text-capitalize text-center">todoinput</h3>
     <Todoinput item={this.state.item} handleChange={this.handleChange} 
     handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
     <Todolist items={this.state.items} 
     clearList={this.clearList} handleDelete={this.handleDelete}
     handleEdit={this.handleEdit}/>
     </div>
    </div>
    </div>
  );
}
}

export default App;
