import React from 'react'
import { http } from '../../ulti/setting';
import * as ActionType from "./constants";

export const action = () => {
    return (dispatch) => {
        http
            .get("ff3207e0-f250-4a1d-9240-b3dbffa8386a")
            .then((result) => {
                dispatch(actSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actFailed(error));
            });
    };
}

const actFailed = (error) => {
    return {
        type: ActionType.FLY_FAILED,
        payload: error,
    };
};

const actSuccess = (data) => {
    return {
        type: ActionType.FLY_SUCCESS,
        payload: data,
    };
};

