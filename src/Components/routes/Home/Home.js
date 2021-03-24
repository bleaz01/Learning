import React from 'react'
import SelectModal from '../../Modals/SelectModal/SelectModal'
import {useQuery} from '@apollo/client'
import { GET_USERS } from '../../../lib/apollo/queries'


const Home=()=>{

  const {loading, data, error} = useQuery(GET_USERS)

  // if(loading) return <div>loding....</div>
  // if(error) return console.log(error)
  // if(!data) return <div>no data</div>

  console.dir(data)
    return(<div>

          salut
       </div> 
       
    )
}

export default Home