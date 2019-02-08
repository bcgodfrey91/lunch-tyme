import React, { Component, Fragment } from 'react';
import ListItem from './ListItem';
import './ListView.css';

class ListView extends Component {

  render() {
    const { restaurants } = this.props;
    const renderList = () => {
      return restaurants.map(restaurant => {
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
