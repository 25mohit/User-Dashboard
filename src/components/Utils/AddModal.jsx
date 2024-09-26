import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AddModal = ({ showModal, setShowModal, newUser, setNewUser, handleAdd }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
              
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
              
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" id="phone" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
              
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" value={newUser?.address?.city} onChange={(e) => setNewUser({ ...newUser, address:{...newUser.address, city: e.target.value} })} />
              
              <label htmlFor="zipcode">Zipcode</label>
              <input type="text" className="form-control" id="zipcode" value={newUser?.address?.zipcode} onChange={(e) => setNewUser({ ...newUser, address:{...newUser.address, zipcode: e.target.value} })} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAdd}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default AddModal