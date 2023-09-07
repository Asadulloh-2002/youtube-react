import { Search } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { colors } from "../../constants/colors"
import styles from './SearchBar.module.scss'


const SearchBar = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        if(value) {
            navigate(`search/${value}`)
        }
    }
    return (
        <Paper 
            component={'form'}
            onSubmit={submitHandler}
            sx={{
                border: `1px solid ${colors.secondary}`, 
                pl: 2, 
                boxShadow: "none"
            }}
        >
            <input type="text" placeholder="Search ..." className={styles.search_input} value={value} onChange={e => setValue(e.target.value)}  />
            <IconButton type={'submit'}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar