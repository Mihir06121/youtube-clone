import React from 'react';

class SearchBar extends React.Component {
    state = { inputSearch: '' }

    onInputChange = event => {
        this.setState(
            { inputSearch: event.target.value }
        )
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.inputSearch);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>SearchBar </label>
                        <input type="text"
                            value={this.state.inputSearch}
                            placeholder="Please write something"
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;