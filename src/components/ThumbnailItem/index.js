// // Write your code here.
// import './index.css'

// const ThumbnailItem = props => {
//   const {imageDetails, isActive, seActiveThumbnailId} = props
//   const {thumbnailUrl, thumbnailAltText, id} = imageDetails
//   const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

//   const onClickThumbnail = () => {
//     seActiveThumbnailId(id)
//   }
//   return (
//     <li className="img-items-container">
//       <button
//         type="button"
//         className="thumbnail-button"
//         onClick={onClickThumbnail}
//       >
//         <img
//           src={thumbnailUrl}
//           alt={thumbnailAltText}
//           className={thumbnailClassName}
//         />
//       </button>
//     </li>
//   )
// }

// export default ThumbnailItem

import './index.css'

// const ThumbnailItem = props => {
//   const {imageDetails, isActive, seActiveThumbnailId} = props
//   const {thumbnailUrl, thumbnailAltText, id} = imageDetails
//   const thumbnailClass = isActive ? 'thumbnail active' : 'thumbnail'

//   const onClickOfThumbnail = () => {
//     seActiveThumbnailId(id)
//   }

//   return (
// <li className="img-items-container">
//   <button
//     type="button"
//     onClick={onClickOfThumbnail}
//     className="thumbnail-button"
//   >
//     <img
//       src={thumbnailUrl}
//       alt={thumbnailAltText}
//       className={thumbnailClass}
//     />
//   </button>
// </li>
//   )
// }

const ThumbnailItem = props => {
  const {imageDetails, isActive, seActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onClickOfThumbnail = () => {
    seActiveThumbnailId(id)
  }
  const thumbnailClass = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="img-items-container">
      <button
        type="button"
        onClick={onClickOfThumbnail}
        className="thumbnail-button"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClass}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
