const Home = () => {
    return ( 
        <div className="home-container">
            <img style={{ marginTop: '15px' }}src="https://phantom-marca.unidadeditorial.es/53108a6ebf13b3ee76bf9d31d24db9a0/resize/1200/f/jpg/assets/multimedia/imagenes/2022/02/24/16456590412309.jpg" alt="Elden Ring"></img>
            <div className="welcome-container">
                Welcome!
                <div className="welcome-message">
                    This website is dedicated to tracking your progress 
                    throughout your adventures in Elden Ring! This tracking includes
                    items, weapons, bosses, quests and anything else that can be 
                    discovered or obtained. 
                </div>
                <p>If I missed anything or you have discoverd a bug, please
                    feel free to send a message in the contact found in the footer.  
                </p>
                <p>Thank you!</p>
            </div>
            <div className="news-container">
                <div className="news-title">
                    <p style={{ marginTop: '15px' }}>Elden Ring</p>
                    <p>Patch 4.0 is here!</p>
                </div>
                <div className="news-item-container">
                    <div className="news-one">
                        <ul>
                            <li>Bug fixes</li>
                            <li>Madness Nerfs</li>
                            <li>Bleed Nerfs</li>
                        </ul>
                    </div>
                    <div className="news-two">
                        <ul>
                            <li>Sorcery Buffs</li>
                            <li>Incantation Buffs</li>
                            <li>Collasal Weapons Buffs(!)</li>
                        </ul>
                    </div>
                </div>
                Click <a href="https://en.bandainamcoent.eu/elden-ring/news/elden-ring-patch-notes-104">here</a> to view patch notes
            </div>
        </div>
     );
}
 
export default Home;