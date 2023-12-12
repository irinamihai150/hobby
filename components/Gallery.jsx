import React from "react"
import { fakeData } from "../data/fakeData"
import ImageGallery from "react-image-gallery"
import { Container } from "react-bootstrap"

const Gallery = () => {
	const galleryItems = fakeData.reduce((accumulator, category) => {
		const categoryItems = category.items.map((item) => ({
			original: item.image,
			thumbnail: item.image,
			description: item.description,
			caption: item.caption,
			// caption: `Category: ${category.category}`,
		}))
		return accumulator.concat(categoryItems)
	}, [])

	const imageStyles = {
		original: {
			width: "300px",
			height: "200px",
			borderRadius: "8px",
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		},
		thumbnail: {
			width: "100px",
			height: "75px",
			borderRadius: "4px",
		},
	}

	return (
		<Container className='p-4 container-gallery'>
			<ImageGallery
				items={galleryItems}
				styles={imageStyles}
				showFullscreenButton={false}
				showBullets={true}
				showThumbnails={false}
			/>
		</Container>
	)
}

export default Gallery
