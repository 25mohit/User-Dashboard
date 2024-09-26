import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchUsers } from './redux/userSlice';
import TableContainer from './components/TableContainer';

function App() {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users);

  console.log("users", users);
  
  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  return (
    <div className="App">
      <div className="heading">
        <h2>Dreamcast Assignment</h2>
      </div>
      <section className="container">
        <TableContainer data={users}/>
      </section>
    </div>
  );
}

export default App;
