import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    appBar: {
      backgroundColor: 'green',
      margin: {// jss-expand gives more readable syntax
        top: 0,
        right: 5,
        bottom: 5,
        left: 0,
      }}
   })
export default useStyles
