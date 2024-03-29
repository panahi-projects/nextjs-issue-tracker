import { Button } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";

const IssueDeleteButton = () => {
  return (
    <Button color="red">
      <TrashIcon />
      Delete Issue
    </Button>
  );
};

export default IssueDeleteButton;
