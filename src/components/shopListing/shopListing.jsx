import React from 'react'

const arr = [{sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'}, {sname:'John\'s Mart', type: 'Daily Needs', location: 'Model Town', oname:'John Smith'} ];

const newArr = arr.map((obj)=>{
    return (
        <div className="itemListing">
            <span className="itemSname">{obj.sname}</span>
            <span className="itemtype">{obj.type}</span>
            <span className="itemLocation">{obj.location}</span>
            <span className="itemOname">{obj.oname}</span>
        </div>
    )
})

const shopListing = () => {

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default shopListing
