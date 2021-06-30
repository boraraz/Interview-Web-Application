import { createSlice } from "@reduxjs/toolkit";

const QuestionSlice = createSlice({
    name: "QuestionSlice",
    initialState: {
        questions: [],
        subject: "",
        answers: [],
    },
    reducers: {
        addQuestion: (state, action) => {
            state.questions = [...state.questions, action.payload];
        },
        addAnswer: (state, action) => {
            state.answers = action.payload
        },

        setSubject: (state, action) => {
            state.subject = action.payload;
        }
    }
});

export const { addQuestion, setSubject, addAnswer } = QuestionSlice.actions
export default QuestionSlice.reducer