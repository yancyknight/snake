'use strict';

function get(path) {
    let settingsString = localStorage.getItem(path);
    if (settingsString === null) {
        return {};
    }
    else {
        return JSON.parse(settingsString);
    }
}

function set(path, {
    field,
    value
} = {}) {
    let settingsString = localStorage.getItem(path);
    if (settingsString === null) {
        var settings = {};
    }
    else {
        var settings = JSON.parse(settingsString);
    }
    settings[field] = value;
    localStorage.setItem(path, JSON.stringify(settings));
    return settings;
}

function remove(path, setting) {
    let settingsString = localStorage.getItem(path);
    if (settingsString === null) {
        return;
    }
    var settings = JSON.parse(settingsString);
    delete settings[setting];
    localStorage.setItem(path, JSON.stringify(settings));
}

function removeAll(path) {
    localStorage.removeItem(path);
}


module.exports = {
    get,
    set,
    remove,
    removeAll
};
