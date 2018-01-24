import React, { Component } from 'react';

class GoogleMap extends Component{
          componentDidMount() {
                    new google.maps.Map(this.refs.map, {
                              zoom: 12, //12 is roughly sized to show a whole city
                              center:{
                                       lat: this.props.lat,
                                       lng: this.props.lon
                              }
                    });
          }
          render(){
                    //this.refs.map will give access to this map
                    return <div ref="map" />;
          }
}

export default GoogleMap