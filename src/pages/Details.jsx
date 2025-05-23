import React, { useState, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Movie from "../components/Movie/Movie";
import Video from "../components/Video/Video";
import FeaturedCast from "../components/FeaturedCast/FeaturedCast";
import Images from "../components/Images/Images";
import Footer from "../components/Footer/Footer";
import Recommendations from "../components/Recommendations/Recommendations";
import { addReview, postRating } from "../redux/features/movie/movieSlice";
import userPlaceholder from "../assets/images/person.png";


function Details() {
    const params = useParams();
    const [showVideo, setShowVideo] = useState(false);
    const [showReviewPopup, setShowReviewPopup] = useState(false);
    const [ratingValue, setRatingValue] = useState("");
    const [reviewText, setReviewText] = useState("");
    const videoRef = useRef(null);
    const dispatch = useDispatch();

    const recommendations = useSelector((state) => state.recommendationsReducer.recommendations);
    const loading_movie = useSelector((state) => state.movieReducer.loading);
    const movie_reviews = useSelector((state) => state.movieReducer.reviews);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const movieId = params.id.split('-')[0];
        if (reviewText.trim()) {
            dispatch(addReview({ movieId: params.id, review: reviewText, rating: parseFloat(ratingValue) }));
            dispatch(postRating({ id: movieId, rating: parseFloat(ratingValue) }));
            setShowReviewPopup(false);
            setReviewText("");
            setRatingValue("");
        }
    };

    function videoClick() {
        videoRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <Movie videoClick={videoClick} id={params.id} showVideo={showVideo} setShowVideo={setShowVideo} />
            <Video ref={videoRef} id={params.id} showVideo={showVideo} setShowVideo={setShowVideo} />
            <FeaturedCast id={params.id} />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 mb-lg-4">
                        <Images id={params.id} />
                    </div>
                    <div className="col-12 col-lg-4">
                        <Recommendations id={params.id} setShowVideo={setShowVideo} />
                    </div>
                </div>
            </div>

            <div style={{ margin: "60px" }}>
                <h3 className="my-4">Reviews</h3>
                <div className="d-flex">
                    <button className="btn btn-warning" onClick={() => setShowReviewPopup(true)}>Review</button>
                </div>
                <hr />
                {Array.isArray(movie_reviews) && movie_reviews.length > 0 ? (
                    movie_reviews.map((review, index) => (
                        <div key={index} className="my-4 text-white">
                            <div className="d-flex align-items-center mb-2 gap-2">
                            <img
  src={
    review.author_details.avatar_path
      ? review.author_details.avatar_path.startsWith("/https")
        ? review.author_details.avatar_path.slice(1)
        : `https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`
      : userPlaceholder
  }
  alt="user-avatar"
  style={{ height: "40px", width: "40px", borderRadius: "20px", objectFit: "cover" }}
/>

                                <h5 style={{ color: "gray", fontSize: "18px" }}>{review.author}</h5>
                            </div>
                            <p style={{ fontSize: "14px" }}>{review.content}</p>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>

            {!loading_movie && <Footer />}

            {/* Review Popup */}
            {showReviewPopup && (
                <div className="modal" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content bg-dark text-white">
                            <div className="modal-header">
                                <h5 className="modal-title">Write a Review</h5>
                                <button type="button" className="btn-close btn-close-white" onClick={() => setShowReviewPopup(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleReviewSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Review</label>
                                        <textarea
                                            className="form-control bg-white text-black"
                                            value={reviewText}
                                            onChange={(e) => setReviewText(e.target.value)}
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Rating (0.5 - 10)</label>
                                        <input
                                            type="number"
                                            className="form-control bg-white text-black"
                                            value={ratingValue}
                                            onChange={(e) => setRatingValue(e.target.value)}
                                            step="0.1"
                                            min="0.5"
                                            max="10"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-warning">Submit Review</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Details;