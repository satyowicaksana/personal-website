import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { News } from 'interfaces/news'
import { serverAPI } from 'apis'

type AnimeState = {
  featuredNewsList: {
    data: News[] | undefined
    loading: boolean
    error: Error | undefined
  }
}

let initialState: AnimeState = {
  featuredNewsList: {
    data: undefined,
    loading: false,
    error: undefined
  }
}

export const getFeaturedNewsList = createAsyncThunk(
  'news/getFeaturedNewsList',
  async () => {
    console.log(serverAPI.getFeaturedNewsList)
    const response = await fetch(serverAPI.getFeaturedNewsList)
    const data: News[] = await response.json()
    return data
  }
)

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeaturedNewsList.pending, state => {
      state.featuredNewsList.loading = true
    })
    builder.addCase(getFeaturedNewsList.fulfilled, (state, { payload }) => {
      state.featuredNewsList.data = payload
      state.featuredNewsList.loading = false
    })
    builder.addCase(getFeaturedNewsList.rejected, (state, action) => {
      state.featuredNewsList.loading = false
      alert('error')
      console.log(action)
    })
  },
})

export const selectFeaturedNewsList = (state: RootState) => state.news.featuredNewsList

export default newsSlice.reducer