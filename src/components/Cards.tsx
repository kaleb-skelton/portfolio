import CardItem from './Carditems'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <h1>Check Out These EPIC Projects!</h1>
                    <ul className="cards__items">
                   
                        <CardItem 
                        src="images/img-6.png"
                        text="Build a 25 + 5 (Pomodoro) Clock"
                        label="Front End Development Libraries"
                        path="https://255clock-skelton.netlify.app/"
                        source="https://github.com/kaleb-skelton/25-5-clock"
                        />
                           <CardItem 
                        src="images/img-5.png"
                        text="Build a JavaScript Calculator"
                        label="Front End Development Libraries"
                        path="https://fcc-ios-calc.netlify.app/"
                        source="https://github.com/kaleb-skelton/fcc-calc"  
                        />
                         <CardItem 
                        src="images/img-4.png"
                        text="Build a Markdown Previewer"
                        label="Front End Development Libraries"
                        path="https://markdown-previewerv2.netlify.app/"
                        source="https://github.com/kaleb-skelton/fcc-markdown-previewerv2"
                        />
                        <CardItem 
                        src="images/img-3.png"
                        text="Build a Random Quote Machine"
                        label="Front End Development Libraries"
                        path="https://quote-generator-fcc.netlify.app/"
                        source="https://github.com/kaleb-skelton/fcc-quote-generator"
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src="images/img-8.png"
                        text="Visualize Data with a Choropleth Map"
                        label="Data Visualization with d3"
                        path="https://fcc-choropleth-map.netlify.app/"
                        source="https://github.com/kaleb-skelton/fcc-choropleth-map"
                        />
                        <CardItem 
                        src="images/img-7.png"
                        text="Visualize Data with a Bar Chart"
                        label="Data Visualization with d3"
                        path="https://fcc-bar.netlify.app/"
                        source="https://github.com/kaleb-skelton/fcc-bar"
                        />
                       
                    </ul>
                </div>
            </div>        
        </div>
    )
}

export default Cards;