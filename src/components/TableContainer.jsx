import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../redux/userSlice';

const TableContainer = ({ data }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(null);
    const [editedUser, setEditedUser] = useState({});

    const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
    };

    const handleEdit = (user) => {
    setIsEditing(user.id);
    setEditedUser({ ...user });
    };
    const handleSave = () => {
    dispatch(updateUser(editedUser));
    setIsEditing(null);
    };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            data?.map((dt) => 
                <tr key={dt?.id} className='row-n'>
                    <td>{dt?.id}</td>
                    <td>{dt?.name}</td>
                    <td>{dt?.email}</td>
                    <td>{dt?.phone}</td>
                    <td>{dt?.address?.city} ({dt?.address?.zipcode})</td>
                    <td className='controls'>
                        <Button size="sm" variant="primary">Edit</Button>
                        <Button size="sm" variant="danger">Delete</Button>
                    </td>
                </tr>)
        }
      </tbody>
    </Table>
  )
}

export default TableContainer