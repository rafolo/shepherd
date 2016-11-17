'use strict';

module.exports.findSheep = (event, context, callback) => {
    const message = 'Łowieczka jest tutaj !!!';
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            message,
            input: event,
        })
    };

    callback(null, response);
};
