import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, SideBar, TeamChannelList, TeamChannelPreview } from './';

import hospitalIcon from '../assets/hospital.png';
import logoutIcon from '../assets/logout.png';

import Cookies from 'universal-cookie';

const ChannelListContainer = () => {
    return (
        <>
            <div className='channel-list__sidebar'>
                <div className='channel-list__sidebar__icon1'>
                    <div className='icon1__inner'>
                        <img src={hospitalIcon} alt="Hospital" width={30} />
                    </div>
                </div>
                <div className='channel-list__sidebar__icon2'>
                    <div className='icon1__inner'>
                        <img src={logoutIcon} alt="Hospital" width={30} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChannelListContainer