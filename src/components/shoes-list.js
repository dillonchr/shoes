import React from 'react';
import './shoes-list.css';
import ShoeDetail from './shoe-detail';

const Shoe = ({
                  thumbUrl,
                  name,
                  onClick
              }) => (
    <div className="shoes-list__tile" onClick={onClick}>
        <img src={thumbUrl} alt={name}/>
        <p className="shoes-list__label">{name}</p>
    </div>
);

export default class ShoesList extends React.PureComponent {
    state = {
        shoes: [],
        selectedShoe: -1
    };

    componentWillMount() {
        fetch('shoes.json')
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
                throw new Error(`fetch error: ${r.status}`);
            })
            .then(shoes => {
                this.setState({shoes});
            });
    }

    showShoeDetails = i => this.setState({selectedShoe: i});

    showShoesListAgain = () => this.showShoeDetails(-1);

    getShoes() {
        if (this.state.selectedShoe >= 0) {
            return <ShoeDetail shoe={this.state.shoes[this.state.selectedShoe]} onExit={this.showShoesListAgain}/>;
        }
        return this.state.shoes.map((s, i) => {
            return <Shoe key={s.name} name={s.name} onClick={() => this.showShoeDetails(i)}
                         thumbUrl={`images/thumbs/${s.image}`}/>;
        });
    }

    render() {
        return (
            <div className="shoes-list">
                {this.getShoes()}
            </div>
        );
    }
}