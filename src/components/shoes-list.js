import React from 'react';
import './shoes-list.css';

const Shoe = ({
    thumbUrl,
    name
}) => (
    <div className="shoes-list__tile">
        <img src={thumbUrl} alt={name} />
    </div>
);

export default class ShoesList extends React.PureComponent {
    state = {
        shoes: []
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
                this.setState({ shoes });
            });
    }

    getShoes() {
        return this.state.shoes.map(s => {
            return <Shoe key={s.name} name={s.name} thumbUrl={`images/thumbs/${s.image}`} />;
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