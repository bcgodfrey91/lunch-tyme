import React, { Component, Fragment } from 'react';
import ListItem from './ListItem';
import './ListView.css';
import helpers from '../../helpers.js'

class ListView extends Component {
  render() {
    const { restaurants } = this.props;
    const renderList = () => {
      return helpers.restaurants.map((restaurant, index) => {
        return (
          <Fragment key={restaurant.name}>
            <ListItem
              restaurant={restaurant}
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
