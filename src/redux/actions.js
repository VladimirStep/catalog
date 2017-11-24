export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const SHOW_CHILDREN = 'SHOW_CHILDREN';
export const HIDE_CHILDREN = 'HIDE_CHILDREN';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

export const ChildrenVisibilityStatus = {
    OPENED: 'OPENED',
    CLOSED: 'CLOSED'
};

export function addCategory(parentId, name) {
    return {
        type: ADD_CATEGORY,
        parentId,
        name
    };
}

export function removeCategory(id) {
    return {
        type: REMOVE_CATEGORY,
        id
    };
}

export function showChildren(id) {
    return {
        type: SHOW_CHILDREN,
        id
    };
}

export function hideChildren(id) {
    return {
        type: HIDE_CHILDREN,
        id
    };
}

export function setCurrentCategory(id) {
    return {
        type: SET_CURRENT_CATEGORY,
        id
    }
}