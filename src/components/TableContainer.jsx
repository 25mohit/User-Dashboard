import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../redux/userSlice';
import Loading from './Utils/Loading';

const TableContainer = ({ data }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [isDeleting, setIsDeleting] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = async (userId) => {
    setIsDeleting(true);
    try {
      await dispatch(deleteUser(userId));
      setIsDeleting(false);
    } catch (error) {
      console.error('Error deleting user:', error);
      setIsDeleting(false);
    }
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
        {data?.map((dt) => (
          <tr key={dt?.id} className='row-n'>
            <td>{dt?.id}</td>
            <td>{isEditing === dt.id ? (
              <input type="text" value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} />
            ) : (
              dt?.name
            )}</td>
            <td>{isEditing === dt.id ? (
              <input type="text" value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} />
            ) : (
              dt?.email
            )}</td>
            <td>{isEditing === dt.id ? (
              <input type="text" value={editedUser.phone} onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })} />
            ) : (
              dt?.phone
            )}</td>
            <td>{dt?.address?.city} {dt?.address?.zipcode && <span title="Zip Code">({dt?.address?.zipcode})</span>}</td>
            <td className='controls'>
              {isEditing === dt.id ? (
                <Button size="sm" variant="warning" onClick={handleSave}>Save</Button>
              ) : (
                <Button size="sm" variant="primary" onClick={() => handleEdit(dt)}>Edit</Button>
              )}
              <Button size="sm" variant="danger" onClick={() => handleDelete(dt.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
      {(!data?.length || isDeleting) && <Loading />}
    </Table>
  )
}

export default TableContainer