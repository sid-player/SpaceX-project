import React from 'react';
import Button from '@material-ui/core/Button';

export const Card=(prop)=>{
         return(
         <div className='container' key={prop.launchpads.launches.id}>  
            <div  key ={prop.launchpads.id}>
              <h1>{prop.launchpads.name}</h1>
              <h5>Details: {prop.launchpads.details}</h5>
              <p>Status: {prop.launchpads.status}</p>
              <h3>Top 3 Launches:-</h3>
              <p>{prop.launchpads.launches.length ? prop.launchpads.launches.slice(0,3).map(ele => <Button key={prop.launchpads.launches.id}  data-toggle="modal" data-target={`#popup${prop.launchpads.launches.id}`} onClick={prop.click}> {ele}</Button>):"No Launches Available"}</p>
            </div>
            </div>)
}