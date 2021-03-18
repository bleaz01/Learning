import React, { useState } from "react"
import useAxios from 'axios-hooks'

import { useQuery, gql } from '@apollo/client';
//style
import './ListingStylesSheet.scss'

const LISTEN_USER = gql`
  query user {
    name
    image
    id
  }
`;





const ListItems = () =>{



    return(
        <div className='ListItems-container'> 
            <div className='ListItems-Main'> 

                {/* <img src=""/> */}
                image

            </div>
            <div className='ListItems-Body'> 
                name
        
            </div>
            <div className='ListItems-Footer'> 
            
                Online
            </div>

        </div>
    )
}

const Listing = () =>{

    const { loading, error, data } = useQuery(LISTEN_USER);

    console.log(data)

    return(
        <div className='Listing-Container'> 
            <div className='Listing-Main'> 
            
                    Amis
            </div>
            {data && <div className='Listing-Body'> 
                {/* {data.map()} */}
                <ListItems/>
            </div>}
            <div className='Listing-Footer'> 
               Footer
            </div>

        </div>
    )

    
}


export default Listing