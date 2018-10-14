import React, { Component } from "react";

class Search extends Component {
    handleSearchChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSearchSubmit = e => {
        e.preventDefault();
        console.log(this.state.searchkey);
    };

    render() {
        return (
            <form className="search-wrapper" onSubmit={this.handleSearchSubmit}>
                <div className="search-container">
                    <div className="search-container-section">
                        <input
                            type="text"
                            name="searchkey"
                            placeholder="Search your news here, type the keyword(s)."
                            onChange={this.handleSearchChange}
                        />
                    </div>
                </div>
            </form>
        );
    }
}
export default Search;