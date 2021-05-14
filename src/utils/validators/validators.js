export const required = (value) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return `The maximum number of words has been exceeded. Maximum length ${ maxLength }`
    } else {
        return undefined
    }
}