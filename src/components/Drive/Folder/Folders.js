import React from "react";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import Folder from "./Folder";

function Folders({ childFolders }) {
  return (
    <div className="d-flex flex-wrap">
      {childFolders.map((childFolder) => {
        return <Folder key={childFolder.id} folder={childFolder}  />;
      })}
    </div>
  );
}

export default Folders;
