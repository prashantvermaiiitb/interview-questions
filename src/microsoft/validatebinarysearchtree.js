/**
 * Assume a BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * https://leetcode.com/problems/validate-binary-search-tree/submissions/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function isValidBinarySearchTree(root, min, max) {
  if (root == null) return true;

  if (root.val < min || root.val > max) return false;

  return (
    isValidBinarySearchTree(root.left, min, root.val - 1) &&
    isValidBinarySearchTree(root.right, root.val + 1, max)
  );
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValidBinarySearchTree(
    root,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY
  );
};
