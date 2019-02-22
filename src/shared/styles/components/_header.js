import { globalVariables } from "../config/_variables";

export const headerStyles = theme => ({
  containerHeader: {
    width: '100%',
    height: '4rem',
    borderBottom: `1px solid ${globalVariables.borderColor}`,
  },
  mainHeaderBlock:{
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    flexWrap: 'wrap'
  },
  mainLogo: {
    height: '3rem',
    margin: '0 1rem',
  },
  lContainer: {
    maxWidth: '1200px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})