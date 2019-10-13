import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
    state = {
        newTech: '',
        techs: ['C', 'PHP', 'Java', 'Javascrip']
    };

    hadleInputChange = e => this.setState({ newTech: e.target.value })

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        });
    }

    handleDelete = tech => this.setState({ techs: this.state.techs.filter(t => t !== tech) })

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map((tech, index) => (
                        <TechItem key={index} tech={tech} onDelete={()=>this.handleDelete(tech)} />
                    ))}
                </ul>
                <input
                    type="text"
                    onChange={this.hadleInputChange}
                    value={this.state.newTech}
                />
                <button type="submit">Adicionar</button>
            </form>
        )
    }
}

export default TechList;
