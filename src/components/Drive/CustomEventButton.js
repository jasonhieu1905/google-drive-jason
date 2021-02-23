import React from "react";
import { OverlayTrigger, Popover, Toast } from "react-bootstrap";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CustomEventButton({ show, item, children }) {
  const renderTooltip = (props) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        <Button
          variant="outline-dark"
          className="text-truncate w-100"
          as={Link}
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Rename
        </Button>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" show={show} placement="right" overlay={renderTooltip}>
      {children}
    </OverlayTrigger>
  );
}

export default CustomEventButton;
