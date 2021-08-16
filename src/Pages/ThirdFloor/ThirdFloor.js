import React, {useState,useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import AOS from 'aos';
import Utils from '../../components/Utils/Utils';

import getWordFromNumber from '../../helpers/NumberToWord';
import MapColorToTeam from '../../helpers/TeamToColors';

import './thirdfloor.css';
import 'aos/dist/aos.css';



const ThirdFloor = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    })

    const [myseat, setSelectedSeat] = useState('');
    const [previousSeatID, setPreviousSeatID] = useState('');
    const [covidSeat,setCovidSeat] = useState(false);

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
            document.getElementById(previousSeatID).style.background = '#1abba6';
            document.getElementById(previousSeatID).style.borderRadius = '0px'
            document.getElementById(previousSeatID).style.borderTopLeftRadius = '25px'
            document.getElementById(previousSeatID).style.borderTopRightRadius = '25px'
        }
        document.getElementById(e.target.id).style.backgroundColor = MapColorToTeam(4);
        document.getElementById(e.target.id).style.borderRadius = '50%';
        document.getElementById(e.target.id).style.border = '2px solid black'

        setPreviousSeatID(e.target.id);
        // alert(selectedSeatID);
        // setSelectedSeat(selectedSeatID);
        splitID(selectedSeatID);
    }

    const handeCovidAlertClose = (event,reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        setCovidSeat(false);
    }

    return (
        <div className='third'>
            <div className='third-navbar'>
                DB Social Desking
            </div>
            <div className='third-utils'>
                <Utils seat={myseat} finalSeatID={previousSeatID} color={'#1abba6'} />
            </div>
            <div className='third-seat-container'>
                <div data-aos={'zoom-in-right'} className='third-left-side'>
                    <div className='third-seat' id='f03s01' onClick={handleSeatClick}>F0301</div>
                    <div className='third-seat covid' id='f03s02' onClick={()=>{setCovidSeat(true)}}>F0302</div>
                    <div className='third-seat' id='f03s03' onClick={handleSeatClick}>F0303</div>
                    <div className='third-seat covid'  id='f03s04' onClick={()=>{setCovidSeat(true)}}>F0304</div>
                    <div className='third-seat' id='f03s05' onClick={handleSeatClick}>F0305</div>
                    <div className='third-seat covid'  id='f03s06' onClick={()=>{setCovidSeat(true)}}>F0306</div>
                    <div className='third-seat' id='f03s07' onClick={handleSeatClick}>F0307</div>
                    <div className='third-seat covid'  id='f03s08' onClick={()=>{setCovidSeat(true)}}>F0308</div>
                    <div className='third-seat' id='f03s09' onClick={handleSeatClick}>F0309</div>
                    <div className='third-seat covid'  id='f03s10' onClick={()=>{setCovidSeat(true)}}>F0310</div>
                </div>
                <div data-aos={'zoom-in-left'} className='third-right-side'>
                    <div className='third-seat covid' id='f03s11' onClick={()=>{setCovidSeat(true)}}>F0311</div>
                    <div className='third-seat' id='f03s12' onClick={handleSeatClick}>F0312</div>
                    <div className='third-seat covid' id='f03s13' onClick={()=>{setCovidSeat(true)}}>F0313</div>
                    <div className='third-seat' id='f03s14' onClick={handleSeatClick}>F0314</div>
                    <div className='third-seat covid' id='f03s15' onClick={()=>{setCovidSeat(true)}}>F0315</div>
                    <div className='third-seat' id='f03s16' onClick={handleSeatClick}>F0316</div>
                    <div className='third-seat covid' id='f03s17' onClick={()=>{setCovidSeat(true)}}>F0317</div>
                    <div className='third-seat' id='f03s18' onClick={handleSeatClick}>F0318</div>
                    <div className='third-seat covid' id='f03s19' onClick={()=>{setCovidSeat(true)}}>F0319</div>
                    <div className='third-seat' id='f03s20' onClick={handleSeatClick}>F0320</div>
                </div>
            </div>
            <Snackbar
                open={covidSeat}
                autoHideDuration={6000}
                onClose={handeCovidAlertClose}
                TransitionComponent={Slide}
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            >
                <Alert severity='info' onClose={handeCovidAlertClose}>
                    This Seat is disabled due to covid restrictions
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ThirdFloor
