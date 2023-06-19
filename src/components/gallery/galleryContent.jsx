import React from 'react'
import { Container } from '@mui/material'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import gallery2 from "../../assets/gallery/gallery2.jpg"
import gallery3 from "../../assets/gallery/gallery3.jpg"
import gallery4 from "../../assets/gallery/gallery4.jpg"
import gallery5 from "../../assets/gallery/gallery5.jpg"
import gallery6 from "../../assets/gallery/gallery6.jpg"
import gallery7 from "../../assets/gallery/gallery7.jpg"
import gallery9 from "../../assets/gallery/gallery9.jpg"
import gallery8 from "../../assets/gallery/gallery8.jpg"
import gallery10 from "../../assets/gallery/gallery10.jpg"
import gallery13 from "../../assets/gallery/gallery13.jpg"
import gallery14 from "../../assets/gallery/gallery14.jpg"
import gallery15 from "../../assets/gallery/gallery15.jpg"
import gallery16 from "../../assets/gallery/gallery16.jpg"
import gallery17 from "../../assets/gallery/gallery17.jpg"
import gallery18 from "../../assets/gallery/gallery18.jpg"
import gallery19 from "../../assets/gallery/gallery19.jpg"
import gallery20 from "../../assets/gallery/gallery20.jpg"
import gallery21 from "../../assets/gallery/gallery21.jpg"

const GalleryContent = () => {
    const dataWebConstant = [
        gallery2, gallery3, gallery4, gallery5, gallery6, gallery7,
        gallery8, gallery9, gallery10, gallery13, gallery14,
        gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21,
    ]
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
                    {
                        dataWebConstant.map((item, index) => 
                            <img src={item} ket={index} alt="founder message"/>
                        )
                    }
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    )
}

export default GalleryContent