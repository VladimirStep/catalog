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
            break;
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

function addChildToParent(array, elementId, childId) {
    let newArray = array.slice();

    for(let item of newArray) {
        if (item.id === elementId) {
            item.children = item.children.concat(childId);
            return newArray;
        }
    }

    return false;
}

function updateCategoryStatus(array, elementId, status) {
    let newArray = array.slice();

    for(let item of newArray) {
        if (item.id === elementId) {
            item.childrenVisibility = status;
            break;
        }
    }

    return newArray;
}

function catalogApp(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            let counterValue = state.primaryKeyCounter;
            const newCategory = {
                id: counterValue,
                parentId: action.parentId,
                children: [],
                name: action.name,
                childrenVisibility: 'closed'
            };
            counterValue += 1;

            if (action.parentId === 0) {
                return Object.assign({}, state, {
                    categories: state.categories.concat(newCategory),
                    primaryKeyCounter: counterValue
                });
            }

            const newAddCategoriesList = addChildToParent(state.categories, action.parentId, newCategory.id);

            if (newAddCategoriesList) {
                return Object.assign({}, state, {
                    categories: newAddCategoriesList.concat(newCategory),
                    primaryKeyCounter: counterValue
                });
            }

            return state;
        case REMOVE_CATEGORY:
            // TODO: Remove all children and update parent
            const { removedCategory, leftCategoriesList } = removeCategory(state.categories, action.id);

            if (removedCategory.length > 0) {
                const parentId = removedCategory[0].parentId;
                const children = removedCategory[0].children;



                return Object.assign({}, state, {
                    categories: leftCategoriesList
                });

            } else {
                return state;
            }
        case SHOW_CHILDREN:
            const newShowCategoriesList = updateCategoryStatus(state.categories, action.id, 'open');

            return Object.assign({}, state, {
                categories: newShowCategoriesList
            });
        case HIDE_CHILDREN:
            const newHideCategoriesList = updateCategoryStatus(state.categories, action.id, 'closed');

            return Object.assign({}, state, {
                categories: newHideCategoriesList
            });

        default:
            return state;
    }
}

export default catalogApp;