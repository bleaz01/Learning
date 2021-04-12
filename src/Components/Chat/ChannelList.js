import React from 'react';
import Channel  from './Channel';

   
        

const ChannelList=({channels})=>{

    let list = `There is no channels to show`;

    if (channels) {
                list = channels.map(c => 
                <Channel 
                    data={c}
                />);
            
            }
    return(
        <div className="channel-list">
           {list}
        </div>
    )
}

export default ChannelList