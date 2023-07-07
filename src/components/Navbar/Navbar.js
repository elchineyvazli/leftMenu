import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useState, useEffect, useRef } from 'react';
import { AiOutlineContacts } from 'react-icons/ai'
import { HiOutlineReceiptPercent } from 'react-icons/hi2'
import { CgUserlane } from 'react-icons/cg'
import { BiBookBookmark } from 'react-icons/bi'
import { BsFillCreditCardFill } from "react-icons/bs"
import { MdLocalActivity } from 'react-icons/md'
import { SiLevelsdotfyi } from 'react-icons/si'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const [widthValue, setWidthValue] = useState(60)
    const [leftValue, setLeftValue] = useState(27)

    function navClickFunction() {
        setClicked(!clicked)
        widthValue === 60 ? setWidthValue(prev => prev + 40) : setWidthValue(prev => prev - 40)
        leftValue === 60 ?
            (
                setLeftValue(prev => prev + 40)
            )
            :
            (
                setLeftValue(prev => prev - 40)
            )
    }

    // function elcin() {
    //     // useEffect(() => {
    //     document.addEventListener("click", function (e) {
    //         return console.log(e.target);
    //     })

    //     return (e) => console.log(e.target)
    //     // }, [])
    // }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    widthValue === 100 && setWidthValue(prev => prev - 40)
                    widthValue === 100 && setLeftValue(prev => prev + 40)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <nav
            ref={wrapperRef}
            style={{
                width: `${widthValue}px`
            }}
        >
            <ul className='navLinksContainer'>
                <li className='aboutUsLi'><Link className='navLinks aboutUs' to="/"><CgUserlane size={56} color="white" /></Link></li>
                <li className='aboutUsLi'><Link className='navLinks specialOffers' to="/"><HiOutlineReceiptPercent size="56px" color="white" /></Link></li>
                <li className='catalogLi'><Link className='navLinks catalog' to="/"><BiBookBookmark size="56px" color="white" /></Link></li>
                <li className='cardsLi'><Link className='navLinks cards' to="/"><BsFillCreditCardFill size="48px" color="white" /></Link></li>
                <li className='careerLi'><Link className='navLinks career' to="/"><SiLevelsdotfyi size="45px" color="white" /></Link></li>
                <li className='activitiesLi'><Link className='navLinks activities' to="/"><MdLocalActivity size="56px" color="white" /></Link></li>
                <li className='contactUsLi'><Link className='navLinks contactUs' to="/"><AiOutlineContacts size="56px" color="white" /></Link></li>
                <button
                    className='navButton'
                    onClick={() => navClickFunction()}
                    style={{
                        left: `${leftValue}px`
                    }}>
                </button>
            </ul>

        </nav>
    )
}

export default Navbar