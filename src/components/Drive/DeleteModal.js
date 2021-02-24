import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { database, storage } from "../../firebase"
import { ROOT_FOLDER } from "../../hooks/useFolder";

function DeleteModal({item, open, closeModal, currentFolder}) {
  const [name, setName] = useState(item.name);
  const { currentUser } = useAuth()
  
  function handleSubmit(e) {
    e.preventDefault()
    const isFile = !!item.folderId;
    if (isFile) {
      database.files
      .doc(item.id)
      .delete();

      // const filePath =
      // currentFolder === ROOT_FOLDER
      //   ? `${currentFolder.path.join("/")}/${item.name}`
      //   : `${currentFolder.path.join("/")}/${currentFolder.name}/${item.name}`

      // storage
      // .ref(`/files/${currentUser.uid}/${filePath}`)
      // .delete()

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
