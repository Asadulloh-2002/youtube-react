import { Checkroom, DeveloperMode, FaceRetouchingNatural, FitnessCenter, GraphicEq, Home, LiveTv, MusicNote, OndemandVideo, School, SportsEsports, TheaterComedy } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { colors } from '../../constants/colors'
import styles from './Category.module.scss'

const Category = ({selectedCategory, selectedCategoryHandler}) => {
    const category = [
        {name: "New", icon: <Home />},
        {name: "Movie", icon: <OndemandVideo />},
        {name: "Live", icon: <LiveTv />},
        {name: "Gaming", icon: <SportsEsports />},
        {name: "Education", icon: <School />},
        {name: "Sport", icon: <FitnessCenter />},
        {name: "Comedy", icon: <TheaterComedy />},
        {name: "Podcast", icon: <GraphicEq />},
        {name: "Fashion", icon: <Checkroom />},
        {name: "Crypto", icon: <DeveloperMode />},
        {name: "Gym", icon: <FitnessCenter />},
        {name: "Beauty", icon: <FaceRetouchingNatural />},
        {name: "Music", icon: <MusicNote />},
    ]
    return (
        <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} direction={'row'} sx={{overflowX: 'scroll'}}>
            {category.map((item) => (
                <button 
                    key={item.name} 
                    style={{
                        borderRadius: '0', 
                        background: item.name === selectedCategory && colors.secondary,
                        color: item.name === selectedCategory && '#fff'
                    }} 
                    className={styles.category_btn} 
                    onClick={() => selectedCategoryHandler(item.name)}
                >
                    <span style={{color: item.name === selectedCategory ? "#fff" : colors.secondary, marginRight: '15px'}}>{item.icon}</span>
                    <span style={{opacity: '1'}}>{item.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Category