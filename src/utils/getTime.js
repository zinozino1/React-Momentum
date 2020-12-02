export const getTime = () => {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();

    const sec = time.getSeconds();
    return {
        hour: hour < 10 ? `0${hour}` : `${hour}`,
        min: min < 10 ? `0${min}` : `${min}`,
        sec: sec < 10 ? `0${sec}` : `${sec}`,
    };
};
