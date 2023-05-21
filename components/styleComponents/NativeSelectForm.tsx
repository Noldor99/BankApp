import { TheaterComedy } from '@mui/icons-material';
import { colors, NativeSelect, styled, Theme } from '@mui/material';
import { ICustomPalette } from '../../theme/thema';

interface NativeSelectFormProps {
  theme: Theme & { palette: ICustomPalette };
}

const NativeSelectForm = styled(NativeSelect)<NativeSelectFormProps>(({ theme }) => ({
  '& .MuiNativeSelect-select': {
    background: theme.palette.orange?.main,
    borderRadius: theme.shape.borderRadius,
    padding: '6px 10px',
    color: theme.palette.background.default,
  },

  '& .MuiNativeSelect-icon': {
    color: theme.palette.primary.main,
  },

}));

export default NativeSelectForm;
