import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import hospitalIcon from '../assets/hospital.png';
import logoutIcon from '../assets/logout.png';

import Cookies from 'universal-cookie';

const SideBar = () => {
    return (
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
    )
}

const CompanyHeader = () => {
    return (
        <div className='channel-list__header'>
            <p className='channel-list__header__text'>Medical Chatter</p>
        </div>
    )
}

const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='team'
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type='team'
                        />
                    )}
                />

                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='messaging'
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type='messaging'
                        />
                    )}
                />
            </div>
        </>
    )
}

export default ChannelListContainer