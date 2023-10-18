export const SetData = (payload) => {
    return {
        type: "SET_DATA",
        payload : payload,
    }
}

export const GroupByStatus = () => {
    return {
        type: 'GROUP_BY_STATUS',
        payload: {},
    }
}

export const GroupByUser = () => {
    return {
        type: "GROUP_BY_USER",
    }
}

export const GroupByPriority = () => {
    return {
        type: "GROUP_BY_PRIORITY",
    }
}

export const OrderByTitle = () => {
    return {
        type: "ORDER_BY_TITLE",
    }
}

export const OrderByPriority = () => {
    return {
        type: "ORDER_BY_PRIORITY",
    }
}
