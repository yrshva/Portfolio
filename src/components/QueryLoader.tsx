import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import RefreshIcon from "@mui/icons-material/Refresh";
import React from "react";

interface QueryLoaderProps<T> {
  query: UseQueryResult<T>;
  children: (data: T) => React.ReactNode;
}

function QueryLoader<T>({ query, children }: QueryLoaderProps<T>) {
  if (query.isFetching) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  if (!query.isSuccess) {
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
  if (!query.isSuccess) {
    return null;
  }

  return <>{children(query.data)}</>;
}
export default QueryLoader;
