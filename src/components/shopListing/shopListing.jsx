import React from 'react'
import './shopListing.css'

const arr = [{sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'} ];

const newArr = arr.map((obj)=>{
    return (
        <button className="itemListing">
            <span className="itemSname">{obj.sname}</span>
            <span className="itemtype">{obj.type}</span>
            <span className="itemLocation">{obj.location}</span>
            <span className="itemOname">{obj.oname}</span>
        </button>
    )
})

const shopListing = () => {

    return (
        <React.Fragment>
            <div className="itemListHead">
            <span className="itemSname">Shop Name</span>
            <span className="itemtype">Shop Type</span>
            <span className="itemLocation">Location</span>
            <span className="itemOname">Owner Name</span>
            </div>
            {newArr}
            <div style={{height:'20vh'}}></div>
        </React.Fragment>
    )
}

export default shopListing
