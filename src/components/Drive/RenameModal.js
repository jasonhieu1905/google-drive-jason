import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase"

function RenameModal({item, open, closeModal}) {
  const [name, setName] = useState(item.name);
  const { currentUser } = useAuth();

  function handleSubmit(e) {
    e.preventDefault()
    database.folders.doc(item.id).update({
      name,
    });
    database.folders
      .where("userId", "==", currentUser.uid)
      .onSnapshot(snapshot => {
        snapshot.docs.map(database.formatDoc).forEach(filterFolder => {
          const updatedPath = filterFolder.path;
          const index = updatedPath.findIndex(p => p.id === item.id);
          if (index !== -1) {
            updatedPath[index] = {
              id: item.id,
              name,
            }
            database.folders.doc(filterFolder.id).update({path: updatedPath});
          }
        })
      })
    setName("");
    closeModal();
  } 

  return (
    <Modal show={open} onHide={closeModal}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header>Rename</Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>New Name</Form.Label>
            <Form.Control
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="success" type="submit">
            Ok
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default RenameModal;
