import React, { Component, Fragment } from 'react';
import ListItem from './ListItem';
import './ListView.css';

class ListView extends Component {
  render() {
    const { restaurants } = this.props;
    const renderList = () => {
      return restaurants.map((restaurant, index) => {
        return (
          <Fragment>
            <ListItem
              name={restaurant.name}
              category={restaurant.category}
              backgroundImageURL={restaurant.backgroundImageURL}
            />
          </Fragment>
        );
      })
    };

    return (
      <div className="list-view">
        {renderList()}
      </div>
    );
  }
}

export default ListView;
