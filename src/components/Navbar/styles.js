import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    appBar: {
      marginBottom: '2rem',
      backgroundColor: '#fff',
    },
    navLink: {
        margin : '0 4rem 0 0', 
        color: '#000',
        '&:hover': {
            color: '#318CE7',
        },
    }
})
export default useStyles
