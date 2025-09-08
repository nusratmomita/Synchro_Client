import React, { useState } from 'react';
import AllChats from '../../Components/AllChats';
import ChatBox from '../../Components/ChatBox';
import UserIfo from '../../Components/UserIfo';
// backdrop-blur-xl
const Home = () => {

    const [selectedChat , setSelectedChat] = useState(false)
    return (
        <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
            <div className={`border-2 border-black rounded-2xl overflow-hidden h-full grid grid-cols-1 relative ${selectedChat ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]" : "md:grid-cols-2"}`}>
                <AllChats></AllChats>
                <ChatBox></ChatBox>
                <UserIfo></UserIfo>
            </div>
        </div>
    );
};

export default Home;