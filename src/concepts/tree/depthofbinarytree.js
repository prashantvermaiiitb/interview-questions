// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

    if (root === null) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    }

};