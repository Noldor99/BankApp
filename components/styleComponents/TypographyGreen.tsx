import { Typography, styled } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { ICustomPalette } from '../../theme/thema';

interface TypographyGreenProps {
  theme: Theme & { palette: ICustomPalette };
}

const TypographyGreen = styled(Typography)<TypographyGreenProps>(({ theme }) => ({
  color: theme.palette.green?.main,
}));

export default TypographyGreen;
