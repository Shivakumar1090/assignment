let initialState = {
    tickets: [],
    users: [],
    choicedData: null,
}

export const DataReducer = (state=initialState,action) => {
    let items = new Set();
    let arr = [], choicedData = [];
    
    switch(action.type){
        case 'SET_DATA' : 
            return {
                ...state,
                tickets : action.payload.tickets,
                users : action.payload.users,
            };

        case 'GROUP_BY_STATUS' : 
            state.tickets.forEach((x) => {
                items.add(x.status);
            })

            arr = [...items];

            arr.forEach((x, index) => {
                let arr = state.tickets.filter((y) => {
                    return x === y.status;
                })
                choicedData.push({
                    [index] : {
                        title : x,
                        value : arr
                    }
                })
            })
            return {
                ...state,
                choicedData,
            }
            
        case 'GROUP_BY_USER' : 
            state?.users.forEach((x, index) => {
                arr = state.tickets?.filter((Felem) => {
                    return x.id === Felem.userId;
                })

                choicedData.push({
                    [index] : {
                        title : x.name,
                        value : arr
                    }
                })
            })
            return {
                ...state,
                choicedData,
            }
            
        case 'GROUP_BY_PRIORITY' : 
            let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

            prior_list.forEach((x, index) => {
                arr = state.tickets.filter((y) => {
                    return index === y.priority;
                })

                choicedData.push({
                    [index] : {
                        title : x,
                        value : arr
                    }
                })
            })
            return {
                ...state,
                choicedData
            }

        case 'ORDER_BY_TITLE' : 
            if (state.choicedData) {
                const sortedChoicedData = state.choicedData.map((x, index) => {
                    if (x[index]?.value) {
                    const sortedValue = [...x[index].value];
                    sortedValue.sort((a, b) => a.title.localeCompare(b.title));
                    return {
                        ...x,
                        [index]: {
                        ...x[index],
                        value: sortedValue,
                        },
                    };
                    }
                    return x;
                });
            
                return {
                    ...state,
                    choicedData: sortedChoicedData,
                };
            }
            return {
                ...state
            };

        case 'ORDER_BY_PRIORITY' : 
            if (state.choicedData) {
                const sortedChoicedData = state.choicedData.map((x, index) => {
                    if (x[index]?.value) {
                    const sortedValue = [...x[index].value];
                    sortedValue.sort((a, b) => b.priority - a.priority);
                    return {
                        ...x,
                        [index]: {
                        ...x[index],
                        value: sortedValue,
                        },
                    };
                    }
                    return x;
                });
            
                return {
                    ...state,
                    choicedData: sortedChoicedData,
                };
            }
            return {
                ...state,
            };

        default : 
            return state;
    }
}

