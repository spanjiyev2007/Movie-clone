import { Stack } from "@mui/material"
import {category} from '../../constant'
import { colors } from "../../constant/colors"

function Category({selectedCatigoryHanfler, selectedCatigory}) {
  return (
    <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
        {category.map(item => (
            <button key={item.name} className="category-btn" style={{borderRadius: '0', background: item.name === selectedCatigory && colors.secondary, color: item.name === selectedCatigory && '#fff'}} onClick={() => selectedCatigoryHanfler(item.name)}>
                <span style={{color: item.name === selectedCatigory ? '#fff' : colors.secondary, marginRight: '15px'}}>{item.icon}</span>
                <span style={{opacity: '1'}}>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Category
