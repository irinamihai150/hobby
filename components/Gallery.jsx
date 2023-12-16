import React from "react"
import { fakeData } from "../data/fakeData"
import ImageGallery from "react-image-gallery"
import { Container, Col, Card, Row } from "react-bootstrap"

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
			width: "100%",
			height: "auto",
			borderRadius: "8px",
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
			// marginTop:"20px"
		},
		thumbnail: {
			width: "100px",
			height: "75px",
			borderRadius: "4px",
		},
	}

	return (
		<Container className='p-4 container-gallery'>
			<Row className='d-flex justify-content-center align-items-center position-relative mb-4'>
				<Col className='text-center'>
					<Card.Img
						className='background-image'
						variant='top'
						src='/images/mainimage.jpg'
						alt='Card image'
						style={{ width: "100%", height: "auto" }}
					/>
				</Col>
				<Col className='position-absolute text-center w-100'>
					<h2 className='mb-4 about-header'>Nail Art Gallery</h2>
				</Col>
			</Row>

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
