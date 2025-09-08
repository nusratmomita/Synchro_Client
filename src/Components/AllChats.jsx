import React from 'react';
import siteLogo from '../assets/synchroIcon.png'
// sidebar
const AllChats = ({selectedChat , setSelectedChat}) => {
    return (
        <div>
            <div className='pb-5'>
                <div className='flex justify-between items-center'>
                    <img src={siteLogo} alt="siteLogo" className='max-w-20 m-5' />
                </div>
            </div>
        </div>
    );
};

export default AllChats;