export const dateFormat = (dt) => {

    const milliseconds = dt * 1000;

    let myDate = new Date(milliseconds);

    let date = myDate.toLocaleString('en-GB').split(",")[0];

    let day = myDate.toLocaleString("en-US", { weekday: "long" });

    return { date, day };
}

export const getItem = (key) => {

    if (sessionStorage.getItem(key)) {

        return JSON.parse(sessionStorage.getItem(key));

    } else {
        return undefined;
    }
};

export const setItem = (key, data) => {

    return sessionStorage.setItem(key, JSON.stringify(data));
};