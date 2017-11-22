import {
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    SHOW_CHILDREN,
    HIDE_CHILDREN} from './actions';

const initialState = {
    categories: [],
    primaryKeyCounter: 1
};

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

function removeCategory(categories, categoryId) {
    let newCategoriesArray = categories.slice();
    let index;
    let removedCategory;

    for(let item of newCategoriesArray) {
        if (item.id === categoryId) {
            index = newCategoriesArray.indexOf(item);
            break;
        }
    }

    if (index > -1) {
        removedCategory = newCategoriesArray.splice(index, 1);
    }

    if (removedCategory) {
        const parentId = removedCategory[0].parentId;
        const children = removedCategory[0].children;

        simpleChildrenRemove(newCategoriesArray, children);
        removeChildFromParent(newCategoriesArray, parentId, categoryId);

        return {
            removedCategory: removedCategory,
            leftCategoriesList: newCategoriesArray
        };
    } else {
        return {
            removedCategory: [],
            leftCategoriesList: newCategoriesArray
        };
    }
}

function simpleChildrenRemove(categories, elementIds) {
    for (let elementId of elementIds) {
        for(let category of categories) {
            if (category.id === elementId) {
                const index = categories.indexOf(category);

                if (index > -1) {
                    const removedCategory = categories.splice(index, 1);

                    if (removedCategory.length > 0 && removedCategory[0].children.length > 0) {
                        simpleChildrenRemove(categories, removedCategory[0].children);
                    }
                }
            }
        }
    }
}

function removeChildFromParent(array, elementId, childId) {
    for(let item of array) {
        if (item.id === elementId) {
            item.children = removeFromArray(item.children, childId);
            return true;
        }
    }

    return false;
}

function removeFromArray(array, element) {
    let tmpArray = array.slice();
    const index = tmpArray.indexOf(element);

    if (index > -1) {
        tmpArray.splice(index, 1);
    }

    return tmpArray;
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
            const { removedCategory, leftCategoriesList } = removeCategory(state.categories, action.id);

            if (removedCategory.length > 0) {
                return Object.assign({}, state, {
                    categories: leftCategoriesList
                });

            }
            return state;
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