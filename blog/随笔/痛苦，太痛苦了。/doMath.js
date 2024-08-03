/**
 * @author YiguiDing
 * @date 2024-08-03T12:25:00
 */
export function doMath(expression) {
    return new Promise(async resolve => {
        let result;
        while (!(result = await Wublubdubdub(expression)));
        resolve(result);
    });
}