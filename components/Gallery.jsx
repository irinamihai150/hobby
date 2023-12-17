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
	const shuffledVideoUrls = [
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/9sWK-U27yUg?si=xH8lC3XqlfE6aPGd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/8IKdLJMC6LM?si=Xik5GJHi4b3iIL1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/d6RS5GRG74Y?si=An7IzsC8JoMezbDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/yX5hpEodkgY?si=RHVIwyLqXWW0V_6a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	]

	return (
		<Container className='p-4 container-gallery'>
			{/* <Row className='d-flex justify-content-center align-items-center position-relative mb-4'>
				<Col className='text-center'>
					<Card.Img
						className='background-image'
						variant='top'
						src='/images/polish.jpg'
						alt='Card image'
						style={{ width: "80%", height: "auto" }}
					/>
				</Col>
				<Col className='position-absolute text-center w-100'>
					<h2 className='mb-4'>Nail Art Gallery</h2>
				</Col>
			</Row> */}

			<ImageGallery
				items={galleryItems}
				styles={imageStyles}
				showFullscreenButton={false}
				showBullets={true}
				showThumbnails={false}
			/>
			<h2>Videos</h2>
			<Row>
				{shuffledVideoUrls.map((videoUrl, index) => (
					<Col key={index} md={6} lg={6} className='mb-4'>
						<Card>
							<Card.Body>
								<Card.Title>Video {index + 1}</Card.Title>
								<Card.Text>
									{/* You can add additional information or description here */}
								</Card.Text>
								<iframe
									title={`Video ${index + 1}`}
									width='100%'
									height='200'
									src={videoUrl}
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									allowFullScreen
								></iframe>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default Gallery
