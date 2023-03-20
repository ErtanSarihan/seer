import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {useFormContext, useFormState} from "react-hook-form";

function ErrorMessageProvider({ children, name }) {

  const {formState: {errors}} = useFormContext();

  const popover = (
    <Popover>
      <Popover.Header>Check Constraints</Popover.Header>
      <Popover.Body>{errors?.[name]?.message}</Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={popover}>
      {children}
    </OverlayTrigger>
  )
}

export {ErrorMessageProvider}