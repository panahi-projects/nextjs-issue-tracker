import { Skeleton } from "@/app/components";
import { Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";

const LoadingIssuesPage = () => {
  const issues = Array.from(Array(5).keys());
  return (
    <>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues &&
            issues.map((issue) => (
              <Table.Row key={issue}>
                <Table.Cell>
                  <Skeleton />
                  <div className="block md:hidden text-purple-600">
                    <Skeleton />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default LoadingIssuesPage;
