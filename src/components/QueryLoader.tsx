import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ReactNode } from "react";

import { containerStyles } from "../styles/projectStyles";

interface QueryLoaderProps<T> {
  query: UseQueryResult<T>;
  children: ReactNode;
}

function QueryLoader<T>({ query, children }: QueryLoaderProps<T>) {
  if (query.isFetching) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  if (query.isError) {
    return (
      <Box>
        <IconButton
          onClick={() => {
            query.refetch();
          }}
        >
          <RefreshIcon />
        </IconButton>
        <Typography>Refresh</Typography>
      </Box>
    );
  }
  return <>{children}</>;
}
export default QueryLoader;
