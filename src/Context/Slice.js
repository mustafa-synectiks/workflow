// const { createSlice,nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

//     const initialState = {
//         Projects:[],
//         state: 'idle',
//         error: null,
//     }

// export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
//     const response = await axios.get(
//         'https://23t3zw1dvd.execute-api.us-east-1.amazonaws.com/dev/org_projects_overview'
//     );
//     return response.data;
// });

// const projectSlice = createSlice({
//     name: 'projects',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProjects.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchProjects.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.projects = action.payload;
//             })
//             .addCase(fetchProjects.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             });
//     },
// });

// export default projectSlice.reducer;
