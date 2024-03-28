import { Skeleton } from "@/app/components";
import { Box, Card, Flex, Heading } from "@radix-ui/themes";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Heading>
        <Skeleton />
      </Heading>
      <Flex gap="4" my="4">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose">
        <Skeleton height="5rem" />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
