import React from 'react';

class SearchField extends React.Component {

    onSearchSubmit = (e) => {
        this.props.onTermSubmit(e.target.value);
    }

    render() {
        return(
                <input type="text" placeholder="Search products" onChange={e => this.onSearchSubmit(e)} />
        );
    }
} 

export default SearchField;