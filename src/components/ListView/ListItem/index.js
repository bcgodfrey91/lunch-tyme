import React, { Component } from 'react';
import PopUp from './PopUp';
import './ListItem.css';

class ListItem extends Component {
  render() {
    const {
      name,
      category,
      backgroundImageURL,
      contact,
      location,
    } = this.props.restaurant;
    const uid = name.toLowerCase().replace(/[^\w\s]|_/g, "").split(" ").join("-");

    const showDetails = (e) => {
      const targ = e.target;
      if (targ.className.includes('shown')) {
        document.querySelectorAll(`.${uid}`).forEach(el => {
          el.classList.remove('shown');
        })
      } else if (targ.className.includes(uid)) {
        document.querySelectorAll('.shown').forEach(el => {
          el.classList.remove('shown');
        })

        document.querySelectorAll(`.${uid}`).forEach(el => {
          el.classList.add('shown');
        })
      }
    }

    return (
      <div className="list-item">
        <div className={`list-item-contents ${uid}`} onClick={showDetails}>
          <img
            className="list-item-background-image"
            src={backgroundImageURL}
            alt="List Item Background"
          />
          <div className="list-item-details">
            <p className="list-item-name">{name}</p>
            <p className="list-item-category">{category}</p>
          </div>
        </div>
        <PopUp
          name={name}
          uid={uid}
          category={category}
          contact={contact}
          location={location}
        />
      </div>
    );
  }
}

export default ListItem;
