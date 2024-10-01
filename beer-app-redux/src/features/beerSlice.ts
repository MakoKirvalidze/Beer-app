import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Beer {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
}

interface BeerState {
  beers: Beer[];
  loading: boolean;
  error: string | null;
}

const initialState: BeerState = {
  beers: [],
  loading: false,
  error: null,
};


export const fetchBeers = createAsyncThunk('beers/fetchBeers', async () => {
  const response = await fetch('https://api.punkapi.com/v2/beers/random?per_page=10');
  if (!response.ok) {
    throw new Error('Failed to fetch beers');
  }
  const data: Beer[] = await response.json();
  return data;
});

const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBeers.fulfilled, (state, action) => {
        state.loading = false;
        state.beers = action.payload;
      })
      .addCase(fetchBeers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default beerSlice.reducer;
