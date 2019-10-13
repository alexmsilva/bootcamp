import React, { Component } from 'react';

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
                        <li key={index}>
                            {tech}
                            <button type="button" onClick={()=>this.handleDelete(tech)}>Delete</button>
                        </li>)
                    )}
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
