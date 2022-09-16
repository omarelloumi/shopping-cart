import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles(
    {
        cartButton: {
            position: 'relative',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: '3rem',
            height: '3rem',
            '&:hover': {
                color: 'lightblue',
                backgroundColor: '#F0F8FF',
                borderRadius: '30%',
            },
        },
        cartImage: {
            color: '#000',
            '&:hover': {
            color: 'lightblue',
            },
        },
        cartCount: {
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: 'red',
            color: '#fff',
            borderRadius: '50%',
            padding: '0 5px',
            fontSize: '0.8rem',
        },
})
export default useStyles
