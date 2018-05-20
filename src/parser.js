const getDescriptors = (description, delimeter) => description.split(delimeter);

const getTokens = (descriptor, tokenSet, tracker) => {
    if (descriptor.length === 0) {
        return tracker;
    }

    if (tokenSet.includes(descriptor)) {
        tracker.push(descriptor);
    }

    // Strip letters one by one until we've matched all tokens
    return getTokens(descriptor.slice(0, -1), tokenSet, tracker);
};

export default {
    getDescriptors,
    getTokens
};