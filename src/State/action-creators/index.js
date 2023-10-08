export const depositMoney = (amount) => {

    return (dispatch)=>{
        dispatch({
            type: "deposit",
            payload: 25
        })

    }

}

export const withdrawMoney = (amount) => {

    return (dispatch)=>{
        dispatch({
            type: "withdraw",
            payload: 25
        })

    }

}