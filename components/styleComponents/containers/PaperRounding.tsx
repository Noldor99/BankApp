import { Paper, styled } from "@mui/material";

const PaperRounding = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none'
}));

export default PaperRounding;
