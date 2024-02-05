/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Flex } from 'antd';
import { Link } from 'react-router-dom';
import formattedDate from '../../utils/formattedDate';

const { Meta } = Card;

function Item({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) {
  return (
    <div className="container-card">
      <Link to={url} target="_blank" className="mt-3">
        <Card
          hoverable
          style={{ width: '100%' }}
        >
          <Meta title={title} description={`${author} | ${formattedDate(publishedAt)}`} />
        </Card>
      </Link>
    </div>
  );
}

const articleItemShape = {
  source: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string,
};

Item.propTypes = {
  ...articleItemShape,
};

export { articleItemShape };

export default Item;
