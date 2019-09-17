/*  uniqueID is a helper function to be used when mapping over an array to ensure unique keys:
    Math.random should be unique because of its seeding algorithm.
    Convert it to base 36 (numbers + letters), and grab the first 9 characters
    after the decimal.
 */

export function uniqueID() {
    return '_' + Math.random().toString(36).substr(2,9);
}
