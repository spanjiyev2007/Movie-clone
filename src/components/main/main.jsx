import { Stack, Box, Container, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { colors } from "../../constant/colors"
import { Category, Videos } from '../'
import { ApiService } from '../../service/api.service'

const Main = () => {
  const [selectedCatigory, setSelectedCatigory] = useState('Movie')
  const [videos, setVideos] = useState([])

  const selectedCatigoryHanfler = (category) => setSelectedCatigory(category)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCatigory}`)
        setVideos(data.items)
      } catch (error) {
      }
    }
    getData()

  }, [selectedCatigory])
  return (
    <Stack>
      {/* <Category selectedCatigoryHanfler={selectedCatigoryHanfler} selectedCatigory={selectedCatigory} /> */}
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={'bold'} mb={2}>
            {selectedCatigory} <span style={{ color: colors.secondary }}></span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main
