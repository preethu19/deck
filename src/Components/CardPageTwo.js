import React, { useState, useEffect } from 'react';	
import axios from 'axios';
import Loader from 'react-loader-spinner';
import CardTwo from './CardTwo';



const CardPageTwo = () =>{
    const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	
	const [pageNo,setPageNo] = useState(1);
	
	
	useEffect(()=>{
		getData();
	},[]);
	
	
	const getData = async() => {
		try{
			const res =	await axios.get(`https://jsonplaceholder.typicode.com/albums/${pageNo}/photos`);
			setData([...data, ...res.data])
		}
		catch(err){
			console.log(err)
		}
		finally{
			setLoading(false)
		}	
	}
	
	
	
	const firstEvent = (e) => {
		//console.log(e);
		var bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
		if(bottom){
			let pg = pageNo + 1;
			setPageNo(pg);
			setLoading(true)
			getData();
		}
	}

    return(
        <div class="container-fluid">
            <div class="row" onScroll={firstEvent}>
            {data.map(item => {
						return(
							<CardTwo key={item.id*item.albumId} id={item.id} thumbnailUrl={item.thumbnailUrl} title={item.title} />
						)
					})}
            {loading? <Loader
				type="Oval"
				color="#424242"
				height={50}
				width={50}
                on
			/>: null}
            </div>
        </div>
        
    )
}

export default CardPageTwo;