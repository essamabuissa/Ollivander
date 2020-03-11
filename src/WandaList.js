import React from 'react';
import WandaCard from "./WandaCard"
function WandaList(props) {
    const wandaCards = props.wands.map(wanda => (
        <WandaCard key={wanda.core} wanda={wanda} />

    )
    )





    return (
        <div className="wands">
            <h1 class="text-center mb-5 color font">Wands</h1>
            <div className="row">{wandaCards}</div>

        </div >

    )





}

export default WandaList;
