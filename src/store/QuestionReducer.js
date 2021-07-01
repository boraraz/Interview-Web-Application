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
            state.answers = [...state.answers, action.payload];
        },

        setSubject: (state, action) => {
            state.subject = action.payload;
        },
        updateQuestions: (state, action) => {
            state.questions = action.payload;
        },
        deletedQuestions: (state,action) => {
            state.answers = action.payload;
        },
    }
});

export const { addQuestion, setSubject, addAnswer, updateQuestions, deletedQuestions } = QuestionSlice.actions
export default QuestionSlice.reducer