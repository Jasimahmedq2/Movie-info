import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BannerInfo from './bannerDetails';
import InfoTable from './InfoTable';

const Info = () => {
  const { id } = useParams()

  const [info, setInfo] = useState({})
console.log('information',info)

  const loadInformation = async () => {
    const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=7144fcb3`)
    setInfo(data)
  }

  useEffect(() => {
    loadInformation()
  }, [])

  return (
    <div>
<BannerInfo info={info}/>
<InfoTable info={info}/>
    </div>
  );
};

export default Info;