import React, { Component, Fragment } from 'react';
import ListItem from './ListItem';
import helpers from '../../helpers.js';
import './ListView.css';

class ListView extends Component {
  render() {
    const renderList = () => {
      return helpers.restaurants.map((helper, index) => {
        return (
          <Fragment>
            <ListItem
              name={helper.name}
              category={helper.category}
              backgroundImageURL={helper.backgroundImageURL}
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
