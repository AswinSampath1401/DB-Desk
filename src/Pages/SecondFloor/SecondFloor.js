import React, {useState,useEffect} from 'react';
import AOS from 'aos';
import Utils from '../../components/Utils/Utils';

import getWordFromNumber from '../../helpers/NumberToWord';
import MapColorToTeam from '../../helpers/TeamToColors';

import './secondfloor.css';
import 'aos/dist/aos.css';


const SecondFloor = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    })

    const [myseat, setSelectedSeat] = useState('');
    const [previousSeatID, setPreviousSeatID] = useState('');
    const splitID = (selectedSeatID) => {
        const floorNumber = selectedSeatID[1] + selectedSeatID[2];
        console.log(`Floor Number ${floorNumber}`);
        const seatNumber = selectedSeatID[4] + selectedSeatID[5];
        console.log(`Seat Number ${seatNumber}`);
        setSelectedSeat(`You have chosen Floor ${getWordFromNumber(floorNumber)} and Seat ${getWordFromNumber(seatNumber)}`);
    }

    const handleSeatClick = (e) => {
        console.log(e.target.id);
        const selectedSeatID = String(e.target.id);
        //Set the previous seat display to default and change new seat color
        // document.getElementById(previousSeatID).style.backgroundColor = '#b0c4de';
        if (previousSeatID.length > 1) {
            console.log(`Previous Seat Id ${previousSeatID}`);
            document.getElementById(previousSeatID).style.background = '#138d66';
            document.getElementById(previousSeatID).style.borderRadius = '0px'
            document.getElementById(previousSeatID).style.borderTopLeftRadius = '25px'
            document.getElementById(previousSeatID).style.borderTopRightRadius = '25px'
        }
        document.getElementById(e.target.id).style.backgroundColor = MapColorToTeam(5);
        document.getElementById(e.target.id).style.borderRadius = '50%';
        document.getElementById(e.target.id).style.border = '2px solid black'

        setPreviousSeatID(e.target.id);
        // alert(selectedSeatID);
        // setSelectedSeat(selectedSeatID);
        splitID(selectedSeatID);
    }

    return (
        <div className='second'>
            <div className='second-navbar'>
                DB Social Desking
            </div>
            <div className='second-utils'>
                <Utils seat={myseat} finalSeatID={previousSeatID} color={'#138d66'} />
            </div>
            <div className='second-seat-container'>
                <div data-aos={'flip-down'} className='second-left-side'>
                    <div className='second-seat' id='f02s01' onClick={handleSeatClick}>F0201</div>
                    <div className='second-seat' id='f02s02' onClick={handleSeatClick}>F0202</div>
                    <div className='second-seat' id='f02s03' onClick={handleSeatClick}>F0203</div>
                    <div className='second-seat' id='f02s04' onClick={handleSeatClick}>F0204</div>
                    <div className='second-seat' id='f02s05' onClick={handleSeatClick}>F0205</div>
                    <div className='second-seat' id='f02s06' onClick={handleSeatClick}>F0206</div>
                    <div className='second-seat' id='f02s07' onClick={handleSeatClick}>F0207</div>
                    <div className='second-seat' id='f02s08' onClick={handleSeatClick}>F0208</div>
                    <div className='second-seat' id='f02s09' onClick={handleSeatClick}>F0209</div>
                    <div className='second-seat' id='f02s10' onClick={handleSeatClick}>F0210</div>
                </div>
                <div data-aos={'flip-up'} className='second-right-side'>
                    <div className='second-seat' id='f02s11' onClick={handleSeatClick}>F02S11</div>
                    <div className='second-seat' id='f02s12' onClick={handleSeatClick}>F02S12</div>
                    <div className='second-seat' id='f02s13' onClick={handleSeatClick}>F02S13</div>
                    <div className='second-seat' id='f02s14' onClick={handleSeatClick}>F02S14</div>
                    <div className='second-seat' id='f02s15' onClick={handleSeatClick}>F02S15</div>
                    <div className='second-seat' id='f02s16' onClick={handleSeatClick}>F02S16</div>
                    <div className='second-seat' id='f02s17' onClick={handleSeatClick}>F02S17</div>
                    <div className='second-seat' id='f02s18' onClick={handleSeatClick}>F02S18</div>
                    <div className='second-seat' id='f02s19' onClick={handleSeatClick}>F02S19</div>
                    <div className='second-seat' id='f02s20' onClick={handleSeatClick}>F02S20</div>
                </div>
            </div>
        </div>
    )
}

export default SecondFloor
