// import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
// import { UseQueryResult } from "@tanstack/react-query";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import { ReactNode } from "react";

// interface QueriesLoaderProps<T> {
//   queries: { [key: string]: UseQueryResult<T> };
//   children: (data: T) => ReactNode;
// }

// function QueriesLoader<T>({ queries, children }: QueriesLoaderProps<T>) {
//   if (Object.values(queries).some(({ isFetching }) => isFetching)) {
//     return (
//       <Box>
//         <CircularProgress />
//       </Box>
//     );
//   }
//   if (Object.values(queries).some(({ isError }) => isError)) {
//     const failedQueies = Object.values(queries).filter(
//       ({ isError }) => isError
//     );
//     return (
//       <Box>
//         <IconButton
//           onClick={() => {
//             failedQueies.map((query) => query.refetch());
//           }}
//         >
//           <RefreshIcon />
//         </IconButton>
//         <Typography>Refresh</Typography>
//       </Box>
//     );
//   }
//   if (!Object.values(queries).every(({ isSuccess }) => isSuccess)) {
//     return null;
//   }

//   return <>{children(Object.entries(queries).map((data) => data))}</>;
// }
// export default QueriesLoader;
