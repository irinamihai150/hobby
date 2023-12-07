// import React from "react"
// import { Container, Row, Col, Card } from "react-bootstrap"
// import { fakeData } from "../data/fakeData"
// import ImageGallery from "react-image-gallery"

// const Gallery = () => {
// 	return (
// 		<Container>
// 			<h2 className='mt-4'>Gallery</h2>
// 			{fakeData.map((category) => (
// 				<div key={category.category} className='mt-4'>
// 					<h3>{category.category}</h3>
// 					<div className='gallery-container d-flex'>
// 						{category.items.map((item) => (
// 							<Card key={item.id} className='m-2' style={{ flex: "1 0 200px" }}>
// 								<Card.Img
// 									variant='top'
// 									src={item.image}
// 									alt={item.description}
// 									style={{ width: "100%", height: "85%", objectFit: "cover" }}
// 								/>
// 								<Card.Body>
// 									<Card.Text>{item.description}</Card.Text>
// 								</Card.Body>
// 							</Card>
// 						))}
// 					</div>
// 				</div>
// 			))}
// 		</Container>
// 	)
// }

// export default Gallery

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
		}))
		return accumulator.concat(categoryItems)
	}, [])

	const imageStyles = {
		original: {
			width: "300px",
			height: "200px",
		},
		thumbnail: {
			width: "100px",
			height: "75px",
		},
	}

	return (
		<Container className='p-4'>
			<ImageGallery
				items={galleryItems}
				styles={imageStyles}
				showFullscreenButton={false}
			/>
		</Container>
	)
}

export default Gallery
