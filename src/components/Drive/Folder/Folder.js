import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import RenameModal from "../RenameModal";
import DeleteModal from "../DeleteModal";

export default function Folder({ folder }) {
  const [openRenameModal, setOpenRenameModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const closeRenameModal = () => {
    setOpenRenameModal(false);
  };

  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  function handleClick(e, data) {
    switch (data.action) {
      case "rename":
        setOpenRenameModal(true);
        break;
      case "delete":
        setOpenDeleteModal(true);
        break;
      default:
        break;
    }
  }

  return (
    <div key={folder.id} style={{ maxWidth: "250px" }} className="p-2">
      <ContextMenuTrigger id={folder.id}>
        <Button
          to={{
            pathname: `/folder/${folder.id}`,
            state: { folder: folder },
          }}
          variant="outline-dark"
          className="text-truncate w-100"
          as={Link}
        >
          <FontAwesomeIcon icon={faFolder} className="mr-2" />
          {folder.name}
        </Button>
      </ContextMenuTrigger>
      <ContextMenu id={folder.id}>
        <MenuItem data={{ action: "rename" }} onClick={handleClick}>
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Rename
        </MenuItem>
        <MenuItem data={{ action: "delete" }} onClick={handleClick}>
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
          Delete
        </MenuItem>
      </ContextMenu>
      {openRenameModal && (
        <RenameModal
          item={folder}
          open={openRenameModal}
          closeModal={closeRenameModal}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          item={folder}
          open={openDeleteModal}
          closeModal={closeDeleteModal}
        />
      )}
    </div>
  );
}
