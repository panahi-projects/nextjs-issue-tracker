import { Issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueEditButton = ({ issue }: { issue: Issue }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${issue.id}/edit`}>Edit issue</Link>
    </Button>
  );
};

export default IssueEditButton;
