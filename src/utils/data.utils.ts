/* Abstracting away a Fetch call in TS: */

// We return a Promise, and we have to indicate it with a type - we use 
// a generic so TS infers which type

export const getData = async <T>(url:string ): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
};