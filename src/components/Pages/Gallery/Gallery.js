import React, { useState } from 'react';
import './Gallery.css';

const images = [
  { src: 'https://tinyurl.com/2cw6e6jb', alt: 'Sports Day', category: 'Sports', date: '2023-03-01' },
  { src: 'https://tinyurl.com/287967jc', alt: 'Science Exhibition', category: 'Exhibition', date: '2023-04-15' },
  { src: 'https://tinyurl.com/2c5h7arm', alt: 'Cultural Fest', category: 'Culture', date: '2023-05-20' },
  { src: 'https://tinyurl.com/2cao6lj8', alt: 'Classroom', category: 'Infrastructure', date: '2023-06-10' },
  { src: 'https://tinyurl.com/2c4uwsrv', alt: 'Library', category: 'Infrastructure', date: '2023-07-01' },
];

const videos = [
  { src: 'path/to/school_tour.mp4', alt: 'School Tour', category: 'Tour', date: '2024-30-07' },
  { src: 'path/to/annual_function.mp4', alt: 'Annual Function', category: 'Event', date: '2024-30-07' },
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const filterItems = (items) => {
    return items.filter(item => {
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
      const dateMatch = !selectedDate || item.date === selectedDate;
      return categoryMatch && dateMatch;
    });
  };

  const filteredImages = filterItems(images);
  const filteredVideos = filterItems(videos);

  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <p>Explore photos and videos from our school events and activities.</p>
      </header>

      <div className="filters">
        <select value={selectedCategory} onChange={handleCategoryChange} className="filter-select">
          <option value="All">All Categories</option>
          <option value="Sports">Sports</option>
          <option value="Exhibition">Exhibition</option>
          <option value="Culture">Culture</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Tour">Tour</option>
          <option value="Event">Event</option>
        </select>

        <input type="date" value={selectedDate} onChange={handleDateChange} className="filter-date" />
      </div>

      <div className="gallery-content">
        <h2>Images</h2>
        <div className="image-gallery">
          {filteredImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>

        <h2>Videos</h2>
        <div className="video-gallery">
          {filteredVideos.map((video, index) => (
            <div key={index} className="gallery-item">
              <video controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
