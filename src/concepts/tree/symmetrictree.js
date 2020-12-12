/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function isMirrorImage(root1, root2) {
    if (root1 == null && root2 === null) {
        return true;
    }
    if (root1 == null || root2 === null) {
        return false;
    }
    return (root1.val === root2.val) && isMirrorImage(root1.left, root2.right) && isMirrorImage(root1.right, root2.left)

}

/**
 * Each time we push in the queue we will start with Root node twice 
 * because we are planning to compare the same left / right sub tree 
 * @param {*} root 
 */
function isMirrorImage2(root) {
    let queue = [];
    queue.push(root);
    queue.push(root);
    while (queue.length > 0) {
        node1 = queue.shift();
        node2 = queue.shift();
        if (node1 === null && node2 === null) continue; // leaf node 
        if (node1 === null || node2 === null) return false; // neither of them are equals
        if (node1.val !== node2.val) return false; // value of the nodes are not equal
        queue.push(node1.left);
        queue.push(node2.right);
        queue.push(node1.right);
        queue.push(node2.left);
    }
    return true;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return isMirrorImage(root, root)
};