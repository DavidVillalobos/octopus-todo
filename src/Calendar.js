import React, { Component } from "react";
import { MediaObject, MediaObjectSection, Thumbnail } from "react-foundation";

class Calendar extends Component {
  render() {
    return (
      <MediaObject>
        <MediaObjectSection>
          <Thumbnail src="https://source.unsplash.com/150x150/?calendar" />
        </MediaObjectSection>
        <MediaObjectSection>
          <h4>Calendar Here</h4>
        </MediaObjectSection>
      </MediaObject> 
    );
  }
}
 
export default Calendar;