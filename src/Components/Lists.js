import React from 'react'

const Lists = props => {
    const nameList = props.nameList;
    const data = nameList.map(data => {
        return data ? (
            <div className="datas" key={data.id}>
                <div>Name: {data.name}</div>
                <div>Username: {data.username}</div>
                <div>Email: {data.email}</div>
                <div>Website: {data.website}</div>
                <div>Phone: {data.phone}</div>
                <div>Street: {data.street}</div>
                <div>City: {data.city}</div>
                <div>Zipcode: {data.zipcode}</div>
            </div>
        ) : null;
    });
};

export default Lists;
