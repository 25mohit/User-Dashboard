import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import { addUser, fetchUsers } from './redux/userSlice';
import TableContainer from './components/TableContainer';
import { Button, Modal } from 'react-bootstrap';
import AddModal from './components/Utils/AddModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
     name: '',
     email: '',
     // ... other fields
   })
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users);

  console.log("users", users);
  
  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  const handleAdd = () => {
    dispatch(addUser(newUser));
    setShowModal(false);
    setNewUser({
      name: '',
      email: '',
      // ... other fields
    });
  };
  return (
    <div className="App">
      <div className="heading">
        <h2>Dreamcast Assignment</h2>
      </div>
      <section className="container">
        <div className='breadcrump'>
          <Button size="sm" variant="success" onClick={() => setShowModal(true)}>Add New Record</Button>
        </div>
        <TableContainer data={users}/>
      </section>
      <AddModal showModal={showModal} setShowModal={setShowModal} newUser={newUser} setNewUser={setNewUser} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
