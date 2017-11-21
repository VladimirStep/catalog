import {
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    SHOW_CHILDREN,
    HIDE_CHILDREN} from './actions';

const initialState = {
    categories: [],
    primaryKeyCounter: 1
};

function removeCategory(array, elementId) {
    let newArray = array.slice();
    let index;

    for(let item of newArray) {
        if (item.id === elementId) {
            index = newArray.indexOf(item);
        }
    }

    if (index > -1) {
        return {
            removedCategory: newArray.splice(index, 1),
            leftCategoriesList: newArray
        };
    } else {
        return {
            removedCategory: [],
            leftCategoriesList: newArray
        };
    }
}

function catalogApp(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            let counterValue = state.primaryKeyCounter;
            const { removedCategory, leftCategoriesList } = removeCategory(state.categories, action.parentId);

            if (removedCategory.length > 0) {
                const newCategory = {
                    id: counterValue,
                    parentId: action.parentId,
                    children: [],
                    name: action.name,
                    childrenVisibility: 'closed'
                };
                counterValue += 1;

                const updatedParentCategory = Object.assign({}, removedCategory[0], {
                    children: removedCategory[0].children.concat(newCategory.id)
                });

                return Object.assign({}, state, {
                    categories: leftCategoriesList.concat([updatedParentCategory, newCategory]),
                    primaryKeyCounter: counterValue
                });
            } else {
                return state;
            }
        case REMOVE_CATEGORY:
            return state;
        case SHOW_CHILDREN:
            return state;
        case HIDE_CHILDREN:
            return state;
        default:
            return state;
    }
}

export default catalogApp;