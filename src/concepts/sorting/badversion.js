/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * This is the case to be solved from Binary search
     * all versions before the Good version are *GOOD* therefore we have to set the lowerbound = mid
     * all versions after the Bad version are *BAD* therefore we have to set the upperbound = mid
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let lb = 1,
            ub = n,
            m = Math.floor((lb + ub) / 2)
        while (lb < ub) {
            m = Math.floor((lb + ub) / 2);
            if (isBadVersion(m)) {
                ub = m;
            } else if (!isBadVersion(m)) {
                lb = m + 1;
            }
        }

        return lb;

    };
};