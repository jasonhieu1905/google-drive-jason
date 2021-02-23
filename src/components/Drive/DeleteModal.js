import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase"

function DeleteModal({item, open, closeModal}) {
  const [name, setName] = useState(item.name);

  function handleSubmit(e) {
    e.preventDefault()
    const isFile = !!item.folderId;
    if (isFile) {
      database.files
      .doc(item.id)
      .delete();
    } else {
      database.folders
      .doc(item.id)
      .delete();
    }
    setName("");
    closeModal();
  } 

  return (
    <Modal show={open} onHide={closeModal}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header>Delete Confirmation ?</Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Are you sure want to delete this: {item.name}</Form.Label>
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

export default DeleteModal;
