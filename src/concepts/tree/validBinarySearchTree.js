/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function isValidBinarySearchTree(root, min, max) {
    if (root == null)
        return true

    if (root.val < min || root.val > max)
        return false;

    return (isValidBinarySearchTree(root.left, min, root.val - 1) && isValidBinarySearchTree(root.right, root.val + 1, max));

}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    return isValidBinarySearchTree(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};


// function isValidBinaryTree(root, parentVal) {
//     if (root === null) {
//         return true;
//     }
//     //for the leaf-nodes
//     if (root.left == null && root.right === null) {
//         return true;
//     }
//     let left = false,
//         right = false;
//     //single node left or right
//     if (root.left === null && root.right !== null) {
//         left = true;
//         if (root.right.val > root.val) {
//             right = isValidBinaryTree(root.right);
//         }
//     } else if (root.left !== null && root.right === null) {
//         right = true;
//         if (root.left.val < root.val) {
//             left = isValidBinaryTree(root.left);
//         }
//     } else {
//         if (root.left.val < root.val && root.right.val > root.val) {
//             left = isValidBinaryTree(root.left, root.val - 1);
//             right = isValidBinaryTree(root.right, root.val + 1);
//         }
//     }
//     return left && right;
// }