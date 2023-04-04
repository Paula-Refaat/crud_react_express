import {BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from "./pages/ManageUsers/AddEdit";
import Users from "./pages/ManageUsers/Users";
import ViewUser from "./pages/ManageUsers/ViewUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center'/>

        <Routes>
          <Route exact path="/" Component={Users} />
          <Route path="/adduser" Component={AddEdit}/>
          <Route path="/updateuser/:id" Component={AddEdit}/>
          <Route path="/viewuser/:id" Component={ViewUser}/>


        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
