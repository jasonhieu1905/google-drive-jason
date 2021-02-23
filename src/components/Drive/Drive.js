import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import NavbarComponent from "./NavBar";
import AddFileButton from "./AddFileButton";
import AddFolderButton from "./AddFolderButton";
import { useFolder } from "./../../hooks/useFolder";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import Files from "./File/Files";
import Folders from "./Folder/Folders";

export default function Drive() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  return (
    <>
      <NavbarComponent />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && <Folders childFolders={childFolders} /> }
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && <Files childFiles={childFiles} /> }
      </Container>
    </>
  );
}
