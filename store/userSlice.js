import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clips: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addClip: (state, action) => {
     const newClip =  action.payload;
     // 既存の配列に、新しくクリップした記事が追加される
     state.clips.push(newClip);
    },
    deleteClip: (state, action) => {
     const deletingClip =  action.payload;
      const currentClips = state.clips;
      const filteredClips = currentClips.filter((clip) => clip.url !== deletingClip.url);
      state.clips = filteredClips
    },
},
});

// Action creators are generated for each case reducer function
export const { addClip, deleteClip } = userSlice.actions

export default userSlice.reducer
