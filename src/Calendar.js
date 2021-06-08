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
          <p>From here you can see when the tasks should be completed</p>
        </MediaObjectSection>
      </MediaObject> 
    </div>
     
    );
  }
}
 
export default Calendar;