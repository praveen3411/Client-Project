import { Alert, AlertTitle, Box } from "@mui/material";

export default function ErrorAlert() {
  return (
    <Box margin="auto" width="400px">
      <br />
      <br />
      <Alert severity="error">
        <AlertTitle>Error with Credentials</AlertTitle>
        <strong>Provide Correct Credentials!</strong>
      </Alert>
    </Box>
  );
}

// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }
