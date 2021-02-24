import React from "react";
import File from "./File";

function Files({ currentFolder, childFiles }) {
  return (
    <div className="d-flex flex-wrap">
      {childFiles.map((childFile) => (
        <div key={childFile.id} style={{ maxWidth: "250px" }} className="p-2">
          <File currentFolder={currentFolder} file={childFile} />
        </div>
      ))}
    </div>
  );
}

export default Files;
