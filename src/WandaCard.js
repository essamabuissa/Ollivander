import React from 'react';

function WandaCard(props) {
    const wanda = props.wanda;
    const wandaName = `${wanda.core}`;

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card mb-3 font">
                <div className="image">
                    <img
                        className="card-img-top img-fluid"
                        src={wanda.imageUrl}
                        alt={wandaName}
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <span>Name: {wandaName}</span>
                    </h5>
                    <small className="card-text fontsize">Wood Type: {wanda.wood}</small>
                    <br></br>
                    <small className="card-text fontsize"> Length: {wanda.length}</small>
                    <br></br>
                    <small className="card-text fontsize"> Price: {wanda.price}</small>

                </div>
            </div>
        </div>
    )
}
export default WandaCard; 