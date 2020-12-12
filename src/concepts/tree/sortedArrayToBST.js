/**
 * data is coming in sorted array creating a binary search tree out of it.
 * https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length === 0 || nums === null) return null;
    if (nums.length === 1) return new TreeNode(nums[0]);

    return formTree(nums, 0, nums.length - 1);

};



function formTree(nums, start, end, node) {

    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);

    node = new TreeNode(nums[mid]);
    if (start <= mid - 1) {
        node.left = formTree(nums, start, mid - 1);
    }
    if (mid + 1 <= end) {
        node.right = formTree(nums, mid + 1, end);
    }
    return node;
}