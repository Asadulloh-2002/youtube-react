import { Link } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import { Logo } from '../../constants'
import { colors } from '../../constants/colors'
import styles from './NavBar.module.scss'
import SearchBar from '../SearchBar'

const NavBar = () => {
    return (
        <Stack 
            direction={'row'} 
            alignItems={'center'} 
            justifyContent={'space-between'} 
            p={2} 
            sx={{ position: 'sticky', top: 0, zIndex: 999, backgroundColor: colors.primary }}
        >
            <Link to='/'><img src={Logo} alt="Logo" width={100} /></Link>
            <SearchBar />
            <Box></Box>
        </Stack>
    )
}

export default NavBar