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
		},
		thumbnail: {
			width: "100px",
			height: "75px",
			borderRadius: "4px",
		},
	}

	return (
		<Container
			className='p-4 container-gallery'
			style={{
				backgroundImage: `url('/images/polish.jpg')`,
			}}
		>
			<h2 className='mb-4 p-4 text-center'>
				Please also check my <span className='red-text'>Instagram</span> and
				<span className='red-text'>Pinterest</span> Page for more inspirational
				and latest creative designs.
			</h2>
			<ImageGallery
				items={galleryItems}
				styles={imageStyles}
				showFullscreenButton={false}
				showBullets={true}
				showThumbnails={false}
			/>
			<h2 className='text-center m-4 fs-1 fw-bold'>Videos</h2>
			<Row className='d-flex text-center'>
				<Col md={6} className='mb-3'>
					<Card.Title className='mb-3'>How to Biab</Card.Title>
					<iframe
						className='embed-responsive-item'
						src='https://www.youtube.com/embed/9sWK-U27yUg?si=xH8lC3XqlfE6aPGd'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</Col>
				<Col md={6}>
					<Card.Title className='mb-3'>How to infill Biab</Card.Title>
					<iframe
						className='embed-responsive-item'
						src='https://www.youtube.com/embed/8IKdLJMC6LM?si=Xik5GJHi4b3iIL1c'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</Col>
				<Col md={6}>
					<Card.Title className='mb-3'>How to apply Builder Gel</Card.Title>
					<iframe
						className='embed-responsive-item'
						src='https://www.youtube.com/embed/d6RS5GRG74Y?si=An7IzsC8JoMezbDU'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</Col>
				<Col md={6}>
					<Card.Title className='mb-3'>Builder Gel</Card.Title>
					<iframe
						className='embed-responsive-item'
						src='https://www.youtube.com/embed/yX5hpEodkgY?si=RHVIwyLqXWW0V_6a'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</Col>
			</Row>
		</Container>
	)
}

export default Gallery
