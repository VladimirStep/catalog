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
            // TODO: Add new category for root level
            let counterValue = state.primaryKeyCounter;
            const { removedCategory: oldCategory, leftCategoriesList: newCategoriesList } = removeCategory(state.categories, action.parentId);

            if (oldCategory.length > 0) {
                const newCategory = {
                    id: counterValue,
                    parentId: action.parentId,
                    children: [],
                    name: action.name,
                    childrenVisibility: 'closed'
                };
                counterValue += 1;

                const updatedParentCategory = Object.assign({}, oldCategory[0], {
                    children: oldCategory[0].children.concat(newCategory.id)
                });

                return Object.assign({}, state, {
                    categories: newCategoriesList.concat([updatedParentCategory, newCategory]),
                    primaryKeyCounter: counterValue
                });
            } else {
                return state;
            }
        case REMOVE_CATEGORY:
            // TODO: Remove all children
            const { leftCategoriesList } = removeCategory(state.categories, action.id);

            return Object.assign({}, state, {
                categories: leftCategoriesList
            });
        case SHOW_CHILDREN:
            const { removedCategory: closedCategory, leftCategoriesList: newShowCategoriesList } = removeCategory(state.categories, action.id);

            if (closedCategory.length > 0) {
                const updatedClosedCategory = Object.assign({}, closedCategory[0], {
                    childrenVisibility: 'open'
                });

                return Object.assign({}, state, {
                    categories: newShowCategoriesList.concat(updatedClosedCategory)
                });
            } else {
                return state;
            }
        case HIDE_CHILDREN:
            const { removedCategory: openCategory, leftCategoriesList: newOpenCategoriesList } = removeCategory(state.categories, action.id);

            if (openCategory.length > 0) {
                const updatedOpenCategory = Object.assign({}, openCategory[0], {
                    childrenVisibility: 'closed'
                });

                return Object.assign({}, state, {
                    categories: newOpenCategoriesList.concat(updatedOpenCategory)
                });
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default catalogApp;