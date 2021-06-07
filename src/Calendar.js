import React, { Component } from "react";
import { MediaObject, MediaObjectSection, Thumbnail } from "react-foundation";

class Calendar extends Component {
  render() {
    return (
      <div>
      <h2>Calendar</h2>
      <MediaObject>
        <MediaObjectSection>
          <Thumbnail src="https://source.unsplash.com/150x150/?calendar" />
        </MediaObjectSection>
        <MediaObjectSection>
          <h4>Schedule Here</h4>
        </MediaObjectSection>
      </MediaObject> 
    </div>
     
    );
  }
}
 
export default Calendar;