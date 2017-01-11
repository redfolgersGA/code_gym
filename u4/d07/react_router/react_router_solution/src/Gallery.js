import React, { Component } from 'react';

class Gallery extends Component {
  constructor(){
    super();
    this.state = {
      gallery: [
        {
          desc: "An art thing.",
          img: "https://pbs.twimg.com/profile_images/676277086491942912/lBupyx70_400x400.jpg"
        },
        {
          desc: "Pretending to not like Pokemon Go",
          img: "http://i.imgur.com/ce6ETcB.jpg"
        },
        {
          desc: "BFF",
          img: "https://larryfire.files.wordpress.com/2013/02/guyfieri-0179-pkg_resized.jpg"
        }
      ]
    }
  }

  renderGallery(){
    const imgStyles={maxWidth: '400px', maxHeight: '400px'}
    return this.state.gallery.map(mytko => {
      return(
        <div key={mytko.img}>
          <p>{mytko.desc}</p>
          <img alt="mytko" style={imgStyles} src={mytko.img} />
          <hr/>
          <br/><br/>
        </div>
      )
    })
  }

  render() {
    const divStyle={paddingLeft: '50px'}
    return (
      <div style={divStyle}>
        <h3>The Gallery</h3>
        { this.renderGallery() }
      </div>
    );
  }
}

export default Gallery;
