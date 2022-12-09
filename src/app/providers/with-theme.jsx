import { theme } from '@app/styles/theme';
import { ThemeProvider } from '@mui/material/styles';

// eslint-disable-next-line react/display-name
export const withTheme = (component) => () => <ThemeProvider theme={theme}>{component()}</ThemeProvider>;
