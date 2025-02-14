import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://media.istockphoto.com/id/471808393/photo/library-bookshelf.jpg?s=612x612&w=is&k=20&c=vKJdpxGLARn73w9M9ZzBt6dSVymdg_CSpM3NsmJKc-U=" alt=''/>
                <img src="https://media.istockphoto.com/id/1365069575/photo/pov-of-young-woman-relaxing-at-home-reading-a-book-lying-on-sofa.jpg?s=1024x1024&w=is&k=20&c=-cFu5GSx8inryHUZOxbL-yD19v9xEiCB9DW-uMe5S_o=" alt=''/>
                <img src="https://media.istockphoto.com/id/1227146093/vector/vector-book-cover-blank-mockup-layout.jpg?s=1024x1024&w=is&k=20&c=rkho79CDXZjiUTMBnvsCtoX49XyEdUz1zGHFvFX7bnk=" alt=''/>
                <img src="https://media.istockphoto.com/id/1301623945/photo/portrait-of-young-caucasian-woman-college-student-in-eyeglasses-hiding-behind-a-book-and.jpg?s=1024x1024&w=is&k=20&c=wawxU1fzLe64tjk-42iRz5E2spFtC7yCgZOv0AURe9g=" alt=''/>
                <img src="https://media.istockphoto.com/id/1158413597/photo/composition-with-books-on-the-table.jpg?s=1024x1024&w=is&k=20&c=-9j9bt4CLlH_OfwWjg1Gbs8L_-lJnQSx-IEVwXxXoHE=" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery