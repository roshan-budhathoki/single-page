import React from 'react'
import { Container } from '@mui/material'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import gallery22 from "../../assets/gallery/1.jpg"
import gallery23 from "../../assets/gallery/2.jpg"
import gallery24 from "../../assets/gallery/3.jpg"
import gallery25 from "../../assets/gallery/4.jpg"
import gallery26 from "../../assets/gallery/5.jpg"
import gallery27 from "../../assets/gallery/6.jpg"
import gallery28 from "../../assets/gallery/7.jpg"
import gallery29 from "../../assets/gallery/8.jpg"
import gallery30 from "../../assets/gallery/9.jpg"
import gallery31 from "../../assets/gallery/10.jpg"
import gallery32 from "../../assets/gallery/11.jpg"
import gallery33 from "../../assets/gallery/12.jpg"
import gallery34 from "../../assets/gallery/13.jpg"
import gallery35 from "../../assets/gallery/14.jpg"
import gallery36 from "../../assets/gallery/15.jpg"
import gallery37 from "../../assets/gallery/16.jpg"
import gallery38 from "../../assets/gallery/17.jpg"
import gallery39 from "../../assets/gallery/18.jpg"
import gallery2 from "../../assets/gallery/gallery2.jpg"
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
        gallery2, gallery4, gallery5, gallery6, gallery7,
        gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28,
        gallery8, gallery9, gallery10, gallery13, gallery14,
        gallery29, gallery30, gallery31, gallery32, gallery33, gallery34, gallery35,
        gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21,
        gallery36, gallery37, gallery38, gallery39
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
                            <img src={item} key={index} alt="founder message"/>
                        )
                    }
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    )
}

export default GalleryContent