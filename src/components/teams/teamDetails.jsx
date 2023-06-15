import React, {useEffect} from 'react'
import Header from '../shared/Header/headerDetail'
import Footer from '../shared/Footer/footerDetail'
import TeamContent from './teamContent';

const Teams = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }, []);
    return (
        <>
            <Header />
            <TeamContent />
            <Footer />
        </>
    )
}

export default Teams