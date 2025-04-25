import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = import.meta.env.VITE_IMDB_BASE_ENDPOINT;

export const getMovieAndReviews = createAsyncThunk(
  
  "getMovieAndReviews",
  
  async ({ id, language }) => {
    const movieResponse = axios.get(`${base_url}/movie/${id}`);
    const reviewsResponse = axios.get(`${base_url}/movie/${id}/reviews?language=${language}`);
    const [movie, reviews] = await axios.all([movieResponse, reviewsResponse]);

    return {
      
      movie: movie.data,
      reviews: reviews.data
    };
  }
);


// export const postRating = createAsyncThunk(
//   "postRating",
//   async ({ id, rating }) => {
//     const response = await axios.post(`${base_url}/movie/${id}/rating`, { value: rating });
//     return response.data;
//   }
// );
export const postRating = createAsyncThunk(
  "postRating",
  async ({ id, rating }) => {
    const response = await axios.post(`${base_url}/movie/${id}/rating`, { value: rating });

    // Return the rating manually alongside the API response
    return {
      ...response.data,
      rating // <-- preserve the actual value
    };
  }
);

const initialState = {
  loading: false,
  movie: {},
  reviews: [],
  error: ""
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // addReview: (state, action) => {
    //   const newReview = {
    //     author: "labib",
    //     author_details: {
    //       name: "newuser",
    //       username: "newuser",
    //       avatar_path: null,
    //       rating: action.payload.rating
    //     },
    //     content: action.payload.review,
    //     created_at: new Date().toISOString(),
    //     id: Date.now().toString(),
    //     updated_at: new Date().toISOString(),
    //     url: `https://www.themoviedb.org/review/${Date.now().toString()}`
    //   };
    
    //   // Add to state
    //   state.reviews.push(newReview);
    
    //   // Save updated reviews to localStorage
    //   localStorage.setItem("reviews", JSON.stringify(state.reviews));
    //   console.log("Review added:", newReview);
    // },
    addReview: (state, action) => {
      const newReview = {
        author: "labib",
        author_details: {
          name: "newuser",
          username: "newuser",
          avatar_path: null,
          rating: action.payload.rating
        },
        content: action.payload.review,
        created_at: new Date().toISOString(),
        id: Date.now().toString(),
        updated_at: new Date().toISOString(),
        url: `https://www.themoviedb.org/review/${Date.now().toString()}`
      };
    
      state.reviews.push(newReview);
    
      // Get existing user data
      const appData = JSON.parse(localStorage.getItem("myAppData")) || {};
    
      // Add new review(s) to that data
      appData.newReview = [...(appData.newReview || []), newReview];
    
      // Save updated object back to localStorage
      localStorage.setItem("myAppData", JSON.stringify(appData));
    
      console.log("Review added:", newReview);
    },
    clearMovie: (state) => {
      state.movie = {};
      state.reviews = [];
      state.loading = false;
      state.error = "";
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getMovieAndReviews.pending, (state) => {
  //       state.loading = true;
  //       state.error = "";
  //     })
  //     .addCase(getMovieAndReviews.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.movie = action.payload.movie;
  //       state.reviews = action.payload.reviews;
  //     })
  //     .addCase(getMovieAndReviews.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     })
  //     .addCase(postRating.fulfilled, (state, action) => {
  //       // Optional: handle if you want to update state directly
  //       console.log("Rating posted successfully:", action.payload);
      
  //       // Retrieve existing user data
  //       const appData = JSON.parse(localStorage.getItem("myAppData")) || {};
      
  //       // Store the last submitted rating (or push to an array if you want rating history)
  //       appData.lastRating = action.meta.arg.rating;
      
  //       // Save back to localStorage
  //       localStorage.setItem("myAppData", JSON.stringify(appData));
  //     });
  // }
  extraReducers: (builder) => {
    builder
      .addCase(getMovieAndReviews.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getMovieAndReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload.movie;
        state.reviews = action.payload.reviews;
      })
      .addCase(getMovieAndReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    }
  });

export const { addReview, clearMovie } = movieSlice.actions;
export default movieSlice.reducer;