import React from 'react';

class SearchField extends React.Component {

    onSearchSubmit = (e) => {
        this.props.onTermSubmit(e.target.value);
    }

    render() {
        return (
          <div
            className="ui one column stackable center aligned page grid"
            style={{ marginTop: "5px" }}
          >
            <div class="ui action input">
              <input
                type="text"
                placeholder="Search products"
                onChange={(e) => this.onSearchSubmit(e)}
              />
              <button className="ui icon button" disabled>
                <i class="search icon"></i>
              </button>
            </div>
          </div>
        );
    }
} 

export default SearchField;