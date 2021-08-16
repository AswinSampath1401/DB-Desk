import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Utils from '../../components/Utils/Utils';

import getWordFromNumber from '../../helpers/NumberToWord';
import MapColorToTeam from '../../helpers/TeamToColors';

import 'aos/dist/aos.css';
import './firstfloor.css';

import AOS from 'aos';

const FirstFloor = () => {

    const [recommend,setRecommend] = useState(()=>{
        const localRecommend = localStorage.getItem('recommend');
        return localRecommend ? localRecommend : true
    });
   
    useEffect(()=>{
        if(recommend){
            alert('Checkout ur Team has booked in 4th Floor');
            localStorage.setItem('recommend',false)
            setRecommend(false);
        }
        AOS.init({
            duration:2000
        })
    },[])

    const [myseat, setSelectedSeat] = useState('');
    const [previousSeatID,setPreviousSeatID] = useState('');

    const splitID = (selectedSeatID)=>{
        const floorNumber = selectedSeatID[1] + selectedSeatID[2];
        console.log(`Floor Number ${floorNumber}`);
        const seatNumber = selectedSeatID[4]+ selectedSeatID[5];
        console.log(`Seat Number ${seatNumber}`);
        setSelectedSeat(`You have chosen Floor ${getWordFromNumber(floorNumber)} and Seat ${getWordFromNumber(seatNumber)}`);
    }

    const handleSeatClick = (e) => {
        console.log(e.target.id);
        const selectedSeatID = String(e.target.id);
        //Set the previous seat display to default and change new seat color
        // document.getElementById(previousSeatID).style.backgroundColor = '#b0c4de';
        if(previousSeatID.length>1){
            console.log(`Previous Seat Id ${previousSeatID}`);
            document.getElementById(previousSeatID).style.background = '#b0c4de';
            document.getElementById(previousSeatID).style.borderRadius='0px'
            document.getElementById(previousSeatID).style.borderTopLeftRadius='25px'
            document.getElementById(previousSeatID).style.borderTopRightRadius='25px'
        }
        document.getElementById(e.target.id).style.backgroundColor = MapColorToTeam(3);
        document.getElementById(e.target.id).style.borderRadius = '50%';
        document.getElementById(e.target.id).style.border = '2px solid white'

        setPreviousSeatID(e.target.id);
        // alert(selectedSeatID);
        // setSelectedSeat(selectedSeatID);
        splitID(selectedSeatID);
    }

    const getDisabled = localStorage.getItem('disabled');

    const disbaledClass = getDisabled ===1 ? 'para disabled' : '';
    
    return (
        <div className='first'>
            <Navbar />
            <Utils seat={myseat} />
            <div>
                <div className='seat-container'>
                    <div data-aos={'fade-right'} className='left-side'>
                        <div className='seat team2' id='f01s01' onClick={handleSeatClick}>F1S1</div>
                        <div className='seat' id='f01s02' onClick={handleSeatClick}>F1S2</div>
                        <div className='seat team2' id='f01s03' onClick={handleSeatClick}>F1S3</div>
                        <div className='seat' id='f01s04' onClick={handleSeatClick}>F1S4</div>
                        <div className='seat' id='f01s05' onClick={handleSeatClick}>F1S5</div>
                        <div className='seat team2' id='f01s06' onClick={handleSeatClick}>F1S6</div>
                        <div className='seat' id='f01s07' onClick={handleSeatClick}>F1S7</div>
                        <div className='seat team2' id='f01s08' onClick={handleSeatClick}>F1S8</div>
                        <div className='seat' id='f01s09' onClick={handleSeatClick}>F1S9</div>
                        <div className='seat team2' id='f01s10' onClick={handleSeatClick}>F1S10</div>
                    </div>
                    <div data-aos={'fade-left'} className='right-side'>
                        <div className='seat team1' id='f01s11' onClick={handleSeatClick}>F1S11</div>
                        <div className='seat' id='f01s12' onClick={handleSeatClick}>F1S12</div>
                        <div className='seat  team1' id='f01s13' onClick={handleSeatClick}>F1S13</div>
                        <div className='seat' id='f01s14' onClick={handleSeatClick}>F1S14</div>
                        <div className='seat team1' id='f01s15' onClick={handleSeatClick}>F1S15</div>
                        <div className='seat' id='f01s16' onClick={handleSeatClick}>F1S16</div>
                        <div className='seat team1' id='f01s17' onClick={handleSeatClick}>F1S17</div>
                        <div className='seat' id='f01s18' onClick={handleSeatClick}>F1S18</div>
                        <div className='seat team1' id='f01s19' onClick={handleSeatClick}>F1S19</div>
                        <div className='seat' id='f01s20' onClick={handleSeatClick}>F1S20</div>
                    </div>
                </div>
                <div className={disbaledClass}>
                    {myseat}
                </div>
            </div>
        </div>
    )
}

export default FirstFloor
