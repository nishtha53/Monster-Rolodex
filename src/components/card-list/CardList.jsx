import { Component } from "react";
import '../card-list/cardlist.css';
import monsterImage from "../card-list/1.png";

class CardList extends Component{

    render(){
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map(monster =>(
                    <div className="card-container">
                        <img src={monsterImage} alt="monster" />
                        <h2>{monster.name}</h2>
                        <p>{monster.email}</p>
                    </div>
                ))
                }
            </div>
        )
    }
}


export default CardList;