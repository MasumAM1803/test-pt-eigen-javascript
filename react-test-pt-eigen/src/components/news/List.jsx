import React from 'react';
import PropTypes from 'prop-types';
import Item, { articleItemShape } from './Item';

function List({ articles }) {
  return (
    <main>
      <div>
        {
         articles.map((article, index) => (
           <Item
             // eslint-disable-next-line react/no-array-index-key
             key={index}
             {...article}
           />
         ))
      }
      </div>
    </main>
  );
}

List.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(articleItemShape)).isRequired,
};

export default List;
