import React, { Component } from 'react';
import './New.scss';

class New extends Component {
  render() {
    return (
      <form id="new-post">
        <input type="file" />
        <input type="text" name="author" placeholder="autor do post" />
        <input type="text" name="place" placeholder="local do post" />
        <input type="text" name="description" placeholder="descrição do post" />
        <input type="text" name="hashtags" placeholder="hashtags do post" />
        <button type="submit">enviar</button>
      </form>
    );
  }
}

export default New;
