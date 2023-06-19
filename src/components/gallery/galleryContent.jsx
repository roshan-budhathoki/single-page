import React from 'react'
import { Container } from '@mui/material'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const GalleryContent = () => {
    const breakpointColumnsObj = {
        1100: 2,
        700: 2,
        500: 1
      };
    return (
        <Container>
            <ResponsiveMasonry
                columnsCountBreakPoints={breakpointColumnsObj}
            >
                <Masonry style={{ padding: "1rem"}}>
                    <img src="https://images.pexels.com/photos/3534122/pexels-photo-3534122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder message"/>
                    <img src="https://images.pexels.com/photos/10202927/pexels-photo-10202927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="founder message"/>
                    <img src="https://images.pexels.com/photos/9938834/pexels-photo-9938834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder message"/>
                    <img src="https://images.pexels.com/photos/3534122/pexels-photo-3534122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder message"/>
                    <img src="https://images.pexels.com/photos/10202927/pexels-photo-10202927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="founder message"/>
                    <img src="https://images.pexels.com/photos/9938834/pexels-photo-9938834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder message"/>
                    <img src="https://images.pexels.com/photos/3534122/pexels-photo-3534122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder message"/>
                    <img src="https://images.pexels.com/photos/10202927/pexels-photo-10202927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="founder message"/>
                    <img src="https://images.pexels.com/photos/9938834/pexels-photo-9938834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder message"/>
                    <img src="https://images.pexels.com/photos/3534122/pexels-photo-3534122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder message"/>
                    <img src="https://images.pexels.com/photos/10202927/pexels-photo-10202927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="founder message"/>
                    <img src="https://images.pexels.com/photos/9938834/pexels-photo-9938834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder message"/>
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    )
}

export default GalleryContent