/**
 * merge the 2 sorted linked list 
 * [4,12,13,0,0,0]
 * [2,5,6]
 */
/**
 * have to work using 3 pointers 
 * 2 are given at the end of each array
 * 1 is being calculated for the larger array 
 * we will be filling the numbers from the right to left
 * @param {*} nums1 
 * @param {*} m right pointer
 * @param {*} nums2 
 * @param {*} n left pointer
 */
function mergeSortedLinkedList(nums1, m, nums2, n) {
    //m and n are non-zero elements
    m--;
    n--; //making them proper indices
    let index = nums1.length - 1;
    while (index >= 0) {
        if (m < 0) {
            nums1[index] = nums2[n--];
        } else if (n < 0) {
            nums1[index] = nums1[m--];
        } else {
            if (nums1[m] > nums2[n]) {
                nums1[index] = nums1[m--];
            } else {
                nums1[index] = nums2[n--];
            }
        }
        index--;
    }
    console.log(nums1)
}