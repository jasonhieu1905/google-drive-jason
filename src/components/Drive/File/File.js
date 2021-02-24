import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import {
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "../DeleteModal";

export default function File({ currentFolder, file }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  function handleClick(e, data) {
    switch (data.action) {
      case 'delete':
        setOpenDeleteModal(true);
        break;
    }
  }

  return (
    <div key={file.id} style={{ maxWidth: "250px" }} className="p-2">
      <ContextMenuTrigger id={file.id}>
        <a
          href={file.url}
          target="_blank"
          className="btn btn-outline-dark text-truncate w-100"
        >
          <FontAwesomeIcon icon={faFile} className="mr-2" />
          {file.name}
        </a>
      </ContextMenuTrigger>
      <ContextMenu id={file.id}>
        <MenuItem
          data={{ action: "delete" }}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
          Delete
        </MenuItem>
      </ContextMenu>

      {openDeleteModal && <DeleteModal
        item={file}
        currentFolder={currentFolder}
        open={openDeleteModal}
        closeModal={closeDeleteModal}
      />}
    </div>
  );
}
