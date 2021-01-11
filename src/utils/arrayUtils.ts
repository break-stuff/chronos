export const pageArray = (array: any[], pageSize: number = 10, pageNumber: number = 1) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export const sortArray = (array: any[], property: string, desc: boolean = false) => {
    return array.sort((a: any, b: any) => {
        let aProp = typeof a[property] === 'string' ? a[property].toLowerCase() : a[property];
        let bProp = typeof b[property] === 'string' ? b[property].toLowerCase() : b[property];

        return desc 
            ? aProp > bProp ? -1 : aProp < bProp ? 1 : 0 
            : aProp < bProp ? -1 : aProp > bProp ? 1 : 0;
    });
};