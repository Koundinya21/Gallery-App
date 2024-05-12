// import {Component} from 'react'
import {useState} from 'react'
import ThumbnailItem from '../ThumbnailItem'

import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

// class Gallery extends Component {
//   state = {
//     activeImg: imagesList[0].id,
//   }

//   seActiveThumbnailId = id => {
//     this.setState({activeImg: id})
//   }

//   render() {
//     const {activeImg} = this.state
//     const {imageUrl, imageAltText} = imagesList[activeImg]

//     return (
//   <div className="app-container">
//     <div className="gallery-container">
//       <img src={imageUrl} alt={imageAltText} className="selected-img" />
//       <h1 className="heading">Nature Photography</h1>
//       <p className="para">Nature Photography by Rahul</p>
//       <ul className="thumbnails-list">
//         {imagesList.map(eachImage => (
//           <ThumbnailItem
//             key={eachImage.id}
//             imageDetails={eachImage}
//             isActive={activeImg === eachImage.id}
//             seActiveThumbnailId={this.seActiveThumbnailId}
//           />
//         ))}
//       </ul>
//     </div>
//   </div>
//     )
//   }
// }

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(imagesList[0].id)
  const seActiveThumbnailId = id => {
    setActiveImg(id)
  }
  const {imageUrl, imageAltText} = imagesList[activeImg]
  return (
    <div className="app-container">
      <div className="gallery-container">
        <img src={imageUrl} alt={imageAltText} className="selected-img" />
        <h1 className="heading">Nature Photography</h1>
        <p className="para">Nature Photography by Rahul</p>
        <ul className="thumbnails-list">
          {imagesList.map(eachImage => (
            <ThumbnailItem
              key={eachImage.id}
              imageDetails={eachImage}
              isActive={activeImg === eachImage.id}
              seActiveThumbnailId={seActiveThumbnailId}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Gallery
