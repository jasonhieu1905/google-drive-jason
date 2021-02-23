import React from "react";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import File from "./File";

function Files({ childFiles }) {
  return (
    <div className="d-flex flex-wrap">
      {childFiles.map((childFile) => (
        <div key={childFile.id} style={{ maxWidth: "250px" }} className="p-2">
          <File file={childFile} />
        </div>
      ))}
    </div>
  );
}

export default Files;
