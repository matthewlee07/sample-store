import React from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import DIRECTORY_DATA from "./directory.data";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = { sections: DIRECTORY_DATA };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, linkUrl, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
