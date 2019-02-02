import Typography from "typography";
import sutroTheme from "typography-theme-sutro";

sutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "main": {
    maxWidth: rhythm(32),
    marginTop: rhythm(2)
  },
  "textarea": {
      minWidth: '100%',
      minHeight: rhythm(10),
      marginBottom: rhythm(1/2)
  },
  "body": {
      backgroundColor: '#FCFCFC',
      color: '#1A051D'
  },
  "button": {
      fontSize: '0.8rem'
  }
});

const typography = new Typography(sutroTheme);

export default typography;
