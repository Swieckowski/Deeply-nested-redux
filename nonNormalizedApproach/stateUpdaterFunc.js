function updateDeepField(state, action) {
    return {
        ...state,
        one : {
            ...state.first,
            two : {
                ...state.one.two,
                three: {
                    ...state.one.two.three,
                    four: {
                        ...state.one.two.three.four,
                        five: {
                            ...state.one.two.three.four.five,
                            six: {
                                ...state.one.two.three.four.five.six,
                                seven: {
                                    ...state.one.two.three.four.five.six.seven,
                                    eight: {
                                        ...state.one.two.three.four.five.six.seven.eight,
                                        nine: {
                                            ...state.one.two.three.four.five.six.seven.eight.nine,
                                            ten: {
                                                ...state.one.two.three.four.five.six.seven.eight.nine.ten,
                                                [action.id]: {
                                                    ...state.one.two.three.four.five.six.seven.eight.nine.ten[action.id],
                                                    eleven: action.payload
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}